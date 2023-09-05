import { StatusBar } from "react-native";
import { ImageBackground } from "expo-image";
import useTokenValidator from "~/hooks/useTokenValidator";

const App = () => {
  useTokenValidator();

  return (
    <>
      <StatusBar backgroundColor='#222' barStyle='default' />
      <ImageBackground
        className='flex flex-1 justify-center items-center bg-black p-8'
        source={require("../../assets/images/background.png")}></ImageBackground>
    </>
  );
};

export default App;
