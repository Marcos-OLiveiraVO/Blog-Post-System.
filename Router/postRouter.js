const express = require("express");
const router = express.Router();
const postController = require("../Controller/postController");
const methodOverride = require("method-override");

router.use(express.json());
router.use(methodOverride("_method"));

router.post("/posts", postController.addPost);

router.get("/posts/:title", postController.acessPost);

router.patch("/posts/:id", postController.updatedPost);

router.delete("/posts/:id", postController.deletePost);

module.exports = router;
