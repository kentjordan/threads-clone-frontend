import { z } from 'zod';
import { valNewThread } from '~/validators/new_thread';

type INewThreadInput = z.infer<typeof valNewThread>;

export {
    INewThreadInput
}