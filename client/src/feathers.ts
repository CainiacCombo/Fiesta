import feathers from '@feathersjs/client';
import auth from '@feathersjs/authentication-client';
import socketio from '@feathersjs/socketio-client';
import io from 'socket.io-client';

const server = process.env.NODE_ENV === 'production'
  ? 'http://ec2-18-222-29-20.us-east-2.compute.amazonaws.com'
  : 'http://localhost:3030';

console.log('USING SERVER:', server);

export const socket = io(server);
export const app = feathers();

app.configure(auth({ storage: window.localStorage }));
app.configure(socketio(socket));
