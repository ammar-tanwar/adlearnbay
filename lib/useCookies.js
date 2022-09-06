import jsCookie from "js-cookie";
import nextCookies from "next-cookies"


export const auth = (ctx) => {
  jsCookie.set("CARD", ctx)
  const { CARD } = nextCookies(ctx);
  return CARD
}