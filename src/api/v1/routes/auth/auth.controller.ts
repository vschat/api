import { Request, Response } from "express";
import axios from "axios";

export class AuthController {
	public github(req: Request, res: Response): void {
		res.redirect(
			`https://github.com/login/oauth/authorize?client_id=${process.env.GH_CLIENT_ID}`
		);
	}

	public githubCallback(req: Request, res: Response): void {
		const code = req.query.code;

		axios({
			method: "post",
			url: `https://github.com/login/oauth/access_token?client_id=${process.env.GH_CLIENT_ID}&client_secret=${process.env.GH_CLIENT_SECRET}&code=${code}`,
			headers: {
				accept: "application/json",
			},
		}).then((response) => {
			const accessToken = response.data.access_token;

			res.json({ success: true, accessToken: accessToken });
		});
	}
}
