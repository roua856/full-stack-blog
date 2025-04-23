import express from "express";
import { addComment, deleteComment, getPostComments } from "../controllers/comment.controller.js";

const router = express.Router()

router.get("/:postId", getPostComments)
router.get("/:postId", addComment)
router.get("/:id", deleteComment)

export default router