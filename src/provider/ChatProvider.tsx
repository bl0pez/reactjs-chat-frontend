import { useReducer } from "react";
import { chatReducer } from "@/chat/reducer/ChatReducer";
import { ChatContext } from "@/context/ChatContext";
import { ChatState } from "@/interfaces";

interface ChatProviderProps {
    children: React.ReactNode;
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