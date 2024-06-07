import { ChatState, Message, User } from "@/interfaces";

export type ChatAction =
  | { type: "SaveUsers"; payload: User[] }
  | { type: "SelectChat"; payload: { id: string } }
  | { type: "NewMessage"; payload: Message }
  | { type: "LoadMessages"; payload: Message[] };
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
      };
    case "NewMessage":
      if (
        state.chatActive === action.payload.from ||
        state.chatActive === action.payload.to
      ) {
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      } else {
        return state;
      }
    case "LoadMessages":
      return {
        ...state,
        messages: action.payload,
      }
    default:
      return state;
  }
};
