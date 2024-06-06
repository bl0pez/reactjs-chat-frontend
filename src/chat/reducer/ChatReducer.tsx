import { ChatState } from "@/context/ChatContext";
import { User } from "@/interfaces";

export type ChatAction = { type: "SaveUsers"; payload: User[] };
export const chatReducer = (
  state: ChatState,
  action: ChatAction
): ChatState => {
  switch (action.type) {
    case "SaveUsers":
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};
