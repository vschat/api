import { Server } from "./server/Server";
import "./ws/v1/ws";
const app: Server = new Server();
app.start();
