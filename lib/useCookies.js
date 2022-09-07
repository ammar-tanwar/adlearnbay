import jsCookie from "js-cookie";
import nextCookies from "next-cookies"


export const auth = (ctx) => {
  console.log("data",ctx)
  jsCookie.set("CARD", ctx, { expires:14,
    secure:false})
  
  const { CARD } = nextCookies(ctx);
  return CARD
}