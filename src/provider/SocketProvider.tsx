import { useEffect } from "react";
import { SocketContext } from "@/context/SocketContext";
import { useAuthContext, useChatContext } from "@/hooks";
import { useSocket } from "@/hooks/useSocket";
import { Message, User } from "@/interfaces";

interface Props {
    children: React.ReactNode;
}
  

export const SocketProvider = ({ children }: Props) => {

    const { socket, online, connectSocket, disconnectSocket } = useSocket(import.meta.env.VITE_SOCKET_URL);
    const { socketConnected } = useAuthContext();
    const { dispatch } = useChatContext();

    useEffect(() => {
        if (socketConnected) {
            connectSocket();
        }
    }, [socketConnected, connectSocket])

    useEffect(() => {
        if (!socketConnected) {
            disconnectSocket();
        }
    }, [socketConnected, disconnectSocket])
    
    //Escucha los cambios de los usuarios conectados
    useEffect(() => {
        socket?.on('list-users', (users: User[]) => {
            dispatch({
                type: 'SaveUsers',
                payload: users
            })
        })
    }, [socket, dispatch])

    // Escucha los mensajes privados
    useEffect(() => {
        socket?.on('private-message', (payload: Message) => {
            dispatch({
                type: 'NewMessage',
                payload
            })
        })
    }, [socket, dispatch])


    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}