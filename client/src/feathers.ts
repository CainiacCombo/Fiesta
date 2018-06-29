import feathers from '@feathersjs/client';
import auth from '@feathersjs/authentication-client';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

export const socket = io(process.env.SERVER || 'http://localhost:3030');
export const app = feathers();

app.configure(auth({ storage: window.localStorage }));
app.configure(socketio(socket));
