import { Request, Response } from 'express';
<<<<<<< HEAD

export class AuthController {
	public github(req: Request, res: Response): void {
		//github oauth code
	}

	public githubCallback(req: Request, res: Response): void {
		//github oauth callback code
=======
import axios from 'axios';
export class AuthController {
	public github(req: Request, res: Response): void {
		res.redirect(
			`https://github.com/login/oauth/authorize?client_id=${process.env.GH_CLIENT_ID}`
		);
	}

	public githubCallback(req: Request, res: Response): void {
		const code = req.query.code;

		axios;
>>>>>>> a1f230e412dd12d8bfeaf247aa42b1f594dd4aa7
	}
}
