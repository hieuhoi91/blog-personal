// useSocket.js - Custom hook để sử dụng Socket.IO
import { getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

import { BASE_URL } from '@/constant';

export const useSocket = (room: any) => {
  const socket = io(BASE_URL, {
    auth: async (cb) => {
      const session: any = await getSession();
      cb({
        token: session.token.accessToken,
      });
    },
  });

  useEffect(() => {
    // Kết nối đến Socket.IO server

    if (room) {
      socket.emit('joinRoom', room);
    }

    return () => {
      socket.off();
    };
  }, [room, socket]);

  const sendMessage = (message: any) => {
    socket.emit('sendMessage', { roomId: room, message: message });
  };

  const onMessage = (callback: any): void => {
    socket.on('message', callback);
  };

  return { sendMessage, onMessage };
};
