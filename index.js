import "dotenv/config";
import Koa from "koa";
import helmet from "koa-helmet";
import router from "./src/routes/customRoute.js";
import bodyparser from "koa-bodyparser";
import morgan from "koa-morgan";


const app = new Koa();

// Log the request details
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms ":referrer" ":user-agent"'))

// Add important security headers to make the app more secure
app.use(helmet());

// Enable bodyParser with default options
app.use(bodyparser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
