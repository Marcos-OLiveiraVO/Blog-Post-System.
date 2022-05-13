const express = require("express");
const LinkSchema = require("../Model/LinkSchema");

const addPost = async (req, res) => {
  const post = req.body;
  try {
    const addNewPost = await new LinkSchema(post);
    const addPostToDatabase = await addNewPost.save();
    res.status(200).send(`Post add to DataBase !`);
  } catch (err) {
    res.status(400).send(`An error Ocorried ${err}`);
  }
};

const acessPost = async (req, res) => {
  const post = req.params.title;
  try {
    const findPostInDataBase = await LinkSchema.findOne({ post });
    const urlPost = findPostInDataBase.url;
    res.status(200).redirect(urlPost);
  } catch (err) {
    res.status(400).send(`An error Ocorried ${err}`);
    res.redirect("/api");
  }
};

const updatedPost = async (req, res) => {
  const doc = {};
  doc.title = req.body.title;
  doc.description = req.body.description;
  doc.url = req.body.url;

  let id = req.params.id;
  if (!id) {
    id = req.body.id;
  }

  try {
    let findDocAndUpdate = await LinkSchema.updateOne({ _id: id }, doc);
    console.log(doc);
    res.status(200).send("Post Updated");
  } catch (err) {
    res.status(400).send(`An error Ocorried ${err}`);
    res.redirect("/api");
  }
};

const deletePost = async (req, res) => {
  let id = req.params.id;
  if (!id) {
    id = req.body.id;
  }
  try {
    let findDocAndDelete = await LinkSchema.deleteOne({ _id: id });
    res.status(200).send("Post deleted");
  } catch (err) {
    res.status(400).send(`An error Ocorried ${err}`);
    res.redirect("/api");
  }
};

module.exports = { addPost, acessPost, updatedPost, deletePost };
