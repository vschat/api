import WebSocket, { Server } from "ws";

interface BetterSocket extends WebSocket {
	isAlive?: boolean;
}
export class WebSocketServer {
	public wss: Server;
	public constructor(public port: number) {}
	public start(): void {
		this.wss = new Server({ port: this.port });
		this.connection();
	}

	public connection(): void {
		function noop() {}

		function heartbeat() {
			this.isAlive = true;
		}
		this.wss.on("connection", (ws: BetterSocket) => {
			ws.isAlive = true;
			ws.on("pong", heartbeat);
			ws.on("message", (message) => {
				this.wss.clients.forEach((client) => {
					if (client.readyState === WebSocket.OPEN) {
						client.send(message);
					}
				});
			});
		});
		const interval = setInterval(function ping() {
			this.wss.clients.forEach(function each(ws: BetterSocket) {
				if (ws.isAlive == false) return ws.terminate();

				ws.isAlive = false;
				ws.ping(noop);
			});
		}, 30000);

		this.wss.on("close", function close() {
			clearInterval(interval);
		});
	}
}
