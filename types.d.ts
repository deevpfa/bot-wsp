import { TokenPayload } from "@/interfaces/api/auth.interface";
import { UploadFile } from "@/interfaces/api/common.interface";
import { Server } from "socket.io";

export declare global {
	var _mong: any;
	var _mongo_connect: any;
	var _socket: Server;
}

declare module "next" {
	export interface NextApiRequest {
		_user: TokenPayload;
		files: UploadFile;
	}
}
