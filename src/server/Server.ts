import { apiV1 } from "../api/v1/BaseRouter";
import { WebSocketServer } from "../ws/v1/WebSocketServer";
import express, { Request, Response, NextFunction } from "express";

import consola, { Consola } from "consola";
import helmet from "helmet";
import cors from "cors";
import * as bodyParser from "body-parser";

import * as dotenv from "dotenv";

export class Server {
	public rest: express.Application;
	public ws: WebSocketServer;
	public logger: Consola = consola;
	public restPort = process.env.PORT || 3000;
	public wsPort = process.env.WS_PORT || 8080;

	public constructor() {
		this.rest = express();
		this.middleware();
		this.registerRoutes();
	}

	public start(): void {
		dotenv.config();
		this.ws = new WebSocketServer(this.wsPort as number);
		this.ws.start();
		this.rest.listen(this.restPort, () =>
			this.logger.success(`REST API started on port ${this.restPort}`)
		);
		this.ws.wss.on("listening", () =>
			this.logger.success(`WebSocket started on port ${this.wsPort}`)
		);
	}
	private middleware(): void {
		this.rest.use(express.json());
		this.rest.use(cors());
		this.rest.use(helmet());
		this.rest.use(bodyParser.urlencoded({ extended: true }));
		this.rest.use(async (req: Request, res: Response, next: NextFunction) => {
			console.log(`[${req.method} - ${req.path}]`);

			next();
		});
	}
	private registerRoutes(): void {
		this.rest.get("/", (req: Request, res: Response) =>
			res.json({ msg: "🚀" })
		);
		this.rest.use("/api/v1", apiV1);
	}
}
