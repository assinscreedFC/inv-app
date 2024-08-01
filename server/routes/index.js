var express = require('express');
var router = express.Router();
const {Postcategorie,GetTableCat,GetTableItem, postItems, deleteitem}=require("../models/work.js")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("recu");
});

router.post("/categories/new",Postcategorie );

router.get("/table/categories",GetTableCat);
//
router.get("/table/items",GetTableItem);

router.post("/items/new",postItems);

router.delete("/items/delete/:id",deleteitem)

module.exports = router;
