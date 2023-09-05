import { z } from 'zod';

const valNewThread = z.object({
    content_text: z.string(),
    content_photos: z.array(z.string())
}).strict();

export {
    valNewThread
}