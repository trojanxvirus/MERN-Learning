import {serve} from "bun";
import { hostname } from "os";

serve({
    fetch(request){
        const url = new URL(request.url);

        if (url.pathname === "/") {
          return new Response("Hello Ice Tea", { status: 200 });
        } else if (url.pathname === "/ice-tea") {
          return new Response(" Ice Tea is good option" , { status: 200 });
        } else {
            return new Response("404 Not Found!", {status: 400})
        }
    },

    port: 3000,
    hostname: "127.0.0.1"
})