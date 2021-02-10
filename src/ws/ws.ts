// the almighty ws server
import { Server } from 'ws';

const wss: Server = new Server({
	port: 8080,
});
