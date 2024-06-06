import { ChatState } from "@/context/ChatContext";
import { User } from "@/interfaces";

export type ChatAction = 
    { type: "SaveUsers"; payload: User[] }
  | { type: "SelectChat"; payload: { id: string } };
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
    case "SelectChat":

      if (state.chatActive === action.payload.id) return state;

      return {
        ...state,
        chatActive: action.payload.id,
        messages: [],
      }
    default:
      return state;
  }
};
