import { Types } from "mongoose";

export type Kick<T, K extends keyof T> = Omit<T, K>;

export type ObjectIdToString<T> = {
	[K in keyof T]: T[K] extends Types.ObjectId ? string : T[K];
};

export type SearchValue = string | string[] | ((item: any) => string);
