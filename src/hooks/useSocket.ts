import { format } from 'date-fns';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { io } from 'socket.io-client';

import { BASE_URL } from '@/constant';

export interface IComment {
  user_id: string;
  username: string;
  avatar?: string;
  createAt: string;
  message: string;
}

type MessageCallback = (message: IComment) => void;

export const useSocket = (room: any) => {
  const session: any = useSession();
  const socket = io(BASE_URL);

  useEffect(() => {
    try {
      if (room) {
        socket.emit('joinRoom', room);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }

    return () => {
      if (socket) {
        socket.disconnect();
      }
    };
  }, [room, socket]);

  const sendMessage = (message: string): void => {
    if (message.length && session.status === 'authenticated') {
      const now = new Date();
      const comment: IComment = {
        user_id: session.data.id,
        username: session.data.username,
        avatar:
          session.data.avatar ||
          'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        createAt: format(now, "MMMM d, yyyy 'at' h:mm aa"),
        message: message,
      };
      socket.emit('sendMessage', { roomId: room, comment });
    }
  };

  const onMessage = (callback: MessageCallback): void => {
    socket.on('comment', callback);
  };

  return { sendMessage, onMessage };
};
