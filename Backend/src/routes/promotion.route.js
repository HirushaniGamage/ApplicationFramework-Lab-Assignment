const Router = require("koa-router");
const { savePromotion, getAllPromotion } = require("../api/promotion.api");

const router = new Router({
  prefix: "/promotion",
});

//@Route POST /promotion
/*
  @Description save promotion
  */
router.post("/", (ctx) => {
  const promotionDetails = ctx.request.body;
  ctx.body = savePromotion(promotionDetails);
  ctx.set("context-Type", "application-json");
  ctx.status = 201;
});

//@Route GET /promotion
/*
  @Description get all Promotion
  */
router.get("/", (ctx) => {
  ctx.body = getAllPromotion();
  ctx.set("contetx-type", "application-json");
  ctx.status = 200;
});

module.exports = router;
