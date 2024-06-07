import { createContext } from "react";
import { ChatState } from "@/interfaces/index";
import { ChatAction } from "@/chat/reducer/ChatReducer";

interface ChatContextProps {
    chatState: ChatState;
    dispatch: React.Dispatch<ChatAction>;
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);

