import { rest } from "msw";
import { setupServer } from "msw/node";
import { charmander } from "./charmander";
import { pikachu } from "./pikachu";
import { page1 } from "./page1";
import { page2 } from "./page2";

const server = setupServer(
  rest.get("https://pokeapi.co/api/v2/pokemon/", (req, res, ctx) => {
    const offset = req.url.searchParams.get("offset");
    let body = page1;
    if (offset === "20") body = page2;
    return res(ctx.status(200), ctx.json(body));
  }),
  rest.get("https://pokeapi.co/api/v2/pokemon/charmander", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(charmander));
  }),
  rest.get("https://pokeapi.co/api/v2/pokemon/pikachu", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(pikachu));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
