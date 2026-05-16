import { handleWebApiRequest } from "./handleRequest";

const nativeFetch = window.fetch.bind(window);

export function installWebApi() {
  window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    const web = await handleWebApiRequest(input, init);
    if (web) return web;
    return nativeFetch(input, init);
  };
}

export function isWebStaticMode(): boolean {
  return import.meta.env.VITE_ILMBUDS_WEB === "true";
}
