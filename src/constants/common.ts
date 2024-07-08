import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const ACCEPT_FORMAT_IMG = "image/png, image/jpeg , image/jpg";

export const ACCEPT_EXCEL = [
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.ms-excel",
];

export const ACCEPT_SIZE_IMG = 1024 * 1024 * 5;

export const getTwoFirstLetters = (
  firstName: string = "",
  lastName: string = ""
) => firstName?.charAt(0).toUpperCase() + lastName?.charAt(0).toUpperCase();

export const CREDITS_REGISTRATION_AND_EMAIL = 4;

export const CREDITS_VALIDATION_PHONE = 2;

export const CREDITS_VALIDATION_PROFILE = 4;

export const PAGE_SIZES = [10, 20, 30];

export const MIN_LENGHT_PASSWORD = 6;

export const DEFAULT_PLACEHOLDER = "/images/img-placeholder.png";

export const SELECT_ALL = "all";

export const SELECT_EMPTY = "empty";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** URL de bandera */
export const FLAG = (countryCode: string, size: "1x1" | "4x3" = "1x1") =>
  countryCode
    ? `/images/flags/${size}/${countryCode.toLowerCase()}.svg`
    : DEFAULT_PLACEHOLDER;

export const GET_IMAGE_PROVIDER = (provider: string) =>
  provider
    ? `/images/providers/${provider.toLowerCase()}/main.png`
    : DEFAULT_PLACEHOLDER;

export const REDIRECT_TO = (path: string, blank: boolean = true) =>
  window.open(path, blank ? "_blank" : "_self");

export enum Store {
  TOKEN = "token",
  USER = "user",
}
