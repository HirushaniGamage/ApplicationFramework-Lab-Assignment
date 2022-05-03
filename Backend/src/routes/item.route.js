const Router = require("koa-router");
const { saveItem, updateItem, getAllItem } = require("../api/item.api");

const router = new Router({
  prefix: "/item",
});

//@Route POST /item
/*
  @Description save Item
  */
router.post("/", (ctx) => {
  const itemDetails = ctx.request.body;
  ctx.body = saveItem(itemDetails);
  ctx.set("content-type", "application-json");
  ctx.status = 201;
});

//@Route PUT /item
/*
  @Description updateItem
  */
router.put("/", (ctx) => {
  const itemDetails = ctx.request.body;
  ctx.body = updateItem(itemDetails);
  ctx.set("content-type", "application-json");
  ctx.status = 201;
});

//@Route GET /item
/*
  @Description get all Item
  */
router.get("/", (ctx) => {
  ctx.body = getAllItem();
  ctx.set("contetx-type", "application-json");
  ctx.status = 200;
});

module.exports = router;
