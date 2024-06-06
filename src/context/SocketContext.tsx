import { createContext, useEffect } from 'react';
import { useSocket } from '../hooks/useSocket'
import type { Socket } from 'socket.io-client';
import { useAuth } from '@/hooks/useAuth';
import { useChat } from '@/hooks/useChat';
import { User } from '@/interfaces';

interface SocketContextProps {
    socket: Socket | null;
    online: boolean;
}

export const SocketContext = createContext<SocketContextProps>({} as SocketContextProps);

interface Props {
    children: React.ReactNode;
}
  

export const SocketProvider = ({ children }: Props) => {

    const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:3000');
    const { socketConnected } = useAuth();
    const { dispatch } = useChat();

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


    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}