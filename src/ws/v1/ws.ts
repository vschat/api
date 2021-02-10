// the almighty ws server
import { Server } from "ws";

const wss: Server = new Server({
	port: 8080,
});

wss.on("connection", (socket, req) => {
	socket.emit("message", "hello world.");
});
