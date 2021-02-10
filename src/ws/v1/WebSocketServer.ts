import { Server } from "ws";

class wss {
	public wss: Server;
	public constructor(public port: number) {}
	public start(): void {
		this.wss = new Server({ port: this.port });
	}
}
export { wss };
