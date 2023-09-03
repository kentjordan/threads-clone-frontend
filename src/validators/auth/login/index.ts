import { z } from "zod";

const valLoginInput = z
    .object({
        email: z.string().email(),
        password: z.string().min(8),
    })
    .strict();

export {
    valLoginInput
}