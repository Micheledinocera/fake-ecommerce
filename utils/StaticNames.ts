import { LayoutKey } from ".nuxt/types/layouts";

export class RouterNames{
  static HOME = "index" as string;
  static LOGIN = "login" as string;
  static NOTFOUND = "not-found" as string;
  static LISTING = "listing" as string;
  static PRODUCT = "product" as string;
}
  
export class LayoutNames{
  static DEFAULT = "default" as LayoutKey;
  static AUTH = "auth" as LayoutKey;
}