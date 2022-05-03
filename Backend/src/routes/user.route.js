const Router = require("koa-router");
const { saveUser, getClientDetails } = require("../api/user.api");

const router = new Router({
  prefix: "/user",
});
//@Route POST /user
/*
@Description
*/
router.post("/", (ctx) => {
  const userDetails = ctx.request.body;
  ctx.body = saveUser(userDetails);
  ctx.set("context-Type", "application-json");
  ctx.status = 201;
});

//@Route GET /user
/*
  @Description get all Customer
  */
router.get("/", (ctx) => {
  ctx.body = getClientDetails();
  ctx.set("context-Type", "application-json");
  ctx.status = 200;
});

module.exports = router;
