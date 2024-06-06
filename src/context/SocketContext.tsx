import { createContext, useEffect } from 'react';
import { useSocket } from '../hooks/useSocket'
import type { Socket } from 'socket.io-client';
import { useAuth } from '@/hooks/useAuth';

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
    
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}