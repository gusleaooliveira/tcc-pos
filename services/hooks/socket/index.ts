import { io } from 'socket.io-client';

const base_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const socket = io(base_URL );
