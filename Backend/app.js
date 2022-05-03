//Load modules

const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const cors = require("@koa/cors");

// Create app
const app = new Koa();

//enable json
app.use(bodyParser());

//Enable cors - cross platform request enable
app.use(cors());

//Load Routers
const userRouter = require("./src/routes/user.route");
const itemRouter = require("./src/routes/item.route");

//Define routes
app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.use(itemRouter.routes()).use(itemRouter.allowedMethods());

app.use((ctx) => {
  ctx.body = "AF assignmnent Api";
});

app.listen(4000);
console.log("Application Frame on Port 4000");
