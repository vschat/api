//Import versions
import { apiV1 } from "../api/v1/BaseRouter";
import express, { Request, Response, NextFunction } from "express";

import consola, { Consola } from "consola";
import helmet from "helmet";
import cors from "cors";
import * as bodyParser from "body-parser";

import * as dotenv from "dotenv";

export class Server {
	public app: express.Application;
	public logger: Consola = consola;
	public PORT = 3000 || process.env.PORT;

	public constructor() {
		this.app = express();

		this.setConfig();
		this.setRequestLogger();
		this.setRoutes();
	}

	public start() {
		this.app.listen(this.PORT, () => {
			this.logger.success(`Server started on port ${this.PORT}`);
		});
	}

	private setConfig() {
		this.app.use(express.json());
		this.app.use(cors());
		this.app.use(helmet());
		this.app.use(bodyParser.urlencoded({ extended: true }));

		dotenv.config();
	}

	private setRequestLogger() {
		this.app.use(async (req: Request, res: Response, next: NextFunction) => {
			console.log(`[${req.method} - ${req.path}]`);

			next();
		});
	}

	private setRoutes() {
		this.app.get("/", (req: Request, res: Response) => {
			res.send("VSChat API");
		});

		this.app.use("/api/v1", apiV1);
	}
}
