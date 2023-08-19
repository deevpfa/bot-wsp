import { readFileSync } from "fs";
// import { Algorithm } from "jsonwebtoken";
import { join } from "path";

export const api_url = process.env.NEXT_PUBLIC_API_URL;

export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/fulldata";

/** Bucket Name */
export const S3_BUCKET_NAME = process.env.S3_BUCKET_NAME || "";
/** */
export const S3_CLOUDFRONT = process.env.S3_CLOUDFRONT || "";
/** */
export const S3_REGION = process.env.S3_REGION || "us-east-1";
/** */
export const S3_ACCESS_KEY = process.env.S3_ACCESS_KEY || "";
/** */
export const S3_SECRET_KEY = process.env.S3_SECRET_KEY || "";

/** Clave Privada */
export const JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY ? readFileSync(join(process.cwd(), "certificates", "jwt_private.pem"), "utf-8") : null;
/** Clave Publica */
export const JWT_PUBLIC_KEY = process.env.JWT_PUBLIC_KEY ? readFileSync(join(process.cwd(), "certificates", "jwt_public.pem"), "utf-8") : null;
/** Clave Secreta */
export const JWT_SECRET = process.env.JWT_SECRET || "!-fulldata-!";
/** Algoritmo */
// export const JWT_ALGORITHM: Algorithm = (process.env.JWT_ALGORITHM as Algorithm) || "RS256";
/** Fecha de Vencimiento corta */
export const JWT_EXPIRES_SM = Number(process.env.JWT_EXPIRES_SM) || 60 * 60 * 1000;
/** Fecha de Vencimiento media */
export const JWT_EXPIRES_MD = Number(process.env.JWT_EXPIRES_MD) || 24 * 60 * 60 * 1000;
/** Fecha de vencimiento larga */
export const JWT_EXPIRES_LG = Number(process.env.JWT_EXPIRES_LG) || 30 * 24 * 60 * 60 * 1000;
