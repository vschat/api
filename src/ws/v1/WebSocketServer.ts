import { Server } from "ws";

export class WebSocketServer {
	public wss: Server;
	public constructor(public port: number) {}
	public start(): void {
		this.wss = new Server({ port: this.port });
	}
}
