const Router = require("@koa/router");
const {
  saveItem,
  updateItem,
  getAllItem,
  getItemById,
} = require("../api/item.api");

const router = new Router({
  prefix: "/item",
});

/*
 *@route POST/item
 *@description save Item
 */
router.post("/", (ctx) => {
  const itemDetails = ctx.request.body;
  ctx.body = saveItem(itemDetails);
  ctx.set("context-Type", "application.json");
  ctx.status = 201;
});

/*
 *@route PUT/item
 *@description Update Item
 */
router.put("/", (ctx) => {
  const itemDetails = ctx.request.body;
  ctx.body = updateItem(itemDetails);
  ctx.set("context-Type", "application.json");
  ctx.status = 201;
});

/*
 *@route GET/item
 *@description Get All Item
 */
router.get("/", (ctx) => {
  ctx.body = getAllItem();
  ctx.set("context-Type", "application.json");
  ctx.status = 200;
});

/*
 *@route GET/item by id
 *@description Get Item By Id
 */
router.get("/getById", (ctx) => {
  ctx.body = getItemById(id);
  ctx.set("context-Type", "application.json");
  ctx.status = 200;
});

module.exports = router;
