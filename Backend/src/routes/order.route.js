const Router = require("koa-router");
const { placeOrder } = require("../api/order.api");

const router = new Router({
  prefix: "/order",
});

//@Route POST /order
/*
  @Description save order
  */
router.post("/", (ctx) => {
  const orderDetails = ctx.request.body;
  ctx.body = placeOrder(orderDetails);
  ctx.set("context-Type", "application-json");
  ctx.status = 200;
});

module.exports = router;
