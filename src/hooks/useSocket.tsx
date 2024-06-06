import { getLocalStorage } from '@/helpers';
import { useCallback, useEffect, useState } from 'react';
import { type Socket, io } from 'socket.io-client';

export const useSocket = ( serverPath: string ) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [ online, setOnline ] = useState(false);

    const connectSocket = useCallback(() => {
        const token = getLocalStorage<string>({
            key: 'token',
        });
    
        const socketTemp = io(serverPath, {
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true, // Forzar la conexión
            query: {
                'x-token': token,
            }
        });
        setSocket(socketTemp);
    }, [serverPath]);

    const disconnectSocket = useCallback(() => {
        socket?.disconnect();
    }, [socket]);

    useEffect(() => {
        setOnline( Boolean(socket?.connected) );
    }, [socket])

    useEffect(() => {
        socket?.on('connect', () => setOnline( true ));
    }, [ socket ])

    useEffect(() => {
        socket?.on('disconnect', () => setOnline( false ));
    }, [ socket ])

    return {
        socket,
        online,
        connectSocket,
        disconnectSocket,
    }
}