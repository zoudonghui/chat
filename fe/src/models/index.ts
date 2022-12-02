import { chatModel } from './chatModel'
import { messageModel } from './messageModel'
import { Models } from "@rematch/core";
export interface RootModel extends Models<RootModel> {
    chatModel: typeof chatModel;
    messageModel: typeof messageModel;
};
export const models: RootModel = { chatModel, messageModel};

