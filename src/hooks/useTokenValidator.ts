import AsyncStorage from "@react-native-async-storage/async-storage";
import JWT from "expo-jwt";
import { AxiosError } from "axios";
import { publicAPI } from "~/api";
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

interface ITokens {
    access_token: string;
    refresh_token: string;
}

const useTokenValidator = () => {
    const router = useRouter();

    useEffect(() => {
        setImmediate(async () => {
            const tokens = (await AsyncStorage.getItem("tokens")) as string;
            const SECRET_KEY = process.env.EXPO_PUBLIC_SECRET_KEY as string;

            if (tokens) {
                const { access_token, refresh_token } = JSON.parse(tokens) as ITokens;

                try {
                    const tokens = await AsyncStorage.getItem("tokens");

                    if (tokens) {
                        JWT.decode<any>(access_token, SECRET_KEY); // Will throw an EXCEPTION if the token is expired
                        router.replace("/home");
                        // console.log("DONE decoding: ACCESS TOKEN");
                    }
                } catch (error: unknown) {
                    try {
                        JWT.decode(refresh_token, SECRET_KEY); // Will throw an EXCEPTION if the token is expired
                        // console.log("DONE decoding: REFRESH TOKEN \nRefreshing Token...");
                        try {
                            const { data } = await publicAPI.get(`/auth/refresh-token`, {
                                headers: { Authorization: `Bearer ${refresh_token}` },
                            });

                            AsyncStorage.setItem("tokens", JSON.stringify(data));
                            router.replace("/home");

                            return;
                        } catch (error: unknown) {
                            if (error instanceof AxiosError) {
                                if (
                                    error.response?.status === 404 ||
                                    error.response?.status === 401
                                ) {
                                    router.replace("/welcome");
                                    return;
                                }
                            }
                        }
                    } catch (error) {
                        router.replace("/welcome");
                    }
                }
            } else {
                router.replace("/welcome");
            }
        });
    }, []);
};

export default useTokenValidator;