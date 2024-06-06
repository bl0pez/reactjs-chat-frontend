import { User } from "@/interfaces/index";
import { ChatAction, chatReducer } from "@/chat/reducer/ChatReducer";
import { createContext, useReducer } from "react";

interface ChatContextProps {
    chatState: ChatState;
    dispatch: React.Dispatch<ChatAction>;
}

export const ChatContext = createContext<ChatContextProps>({} as ChatContextProps);

interface ChatProviderProps {
    children: React.ReactNode;
}

export interface ChatState {
    id: string;
    chatActive: string | null;
    users: User[];
    messages: any[];

}

const initialState: ChatState = {
    id: "",
    chatActive: null,
    users: [],
    messages: [],
}

export const ChatProvider = ({children}: ChatProviderProps) => {

    const [chatState, dispatch] = useReducer(chatReducer, initialState);

    return (
        <ChatContext.Provider value={{
            chatState,
            dispatch
        }}>
            {children}
        </ChatContext.Provider>
    )
}