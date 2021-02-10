import WebSocket, { Server } from "ws";

export class WebSocketServer {
	public wss: Server;
	public constructor(public port: number) {}
	public start(): void {
		this.wss = new Server({ port: this.port });
	}

	public connection(): void {
		this.wss.on("connection", (ws) => {
			ws.on("message", (message) => {
				this.wss.clients.forEach((client) => {
					if (client.readyState === WebSocket.OPEN) {
						client.send(message);
					}
				});
			});
		});
	}
}
