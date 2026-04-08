import express from "express";

import auth from "../middleware/authMiddleware";

import {

  createApplication,

  getApplications,

  updateStatus,

  deleteApplication

} from "../controllers/applicationController";

const router = express.Router();

router.use(auth);

router.post("/", createApplication);

router.get("/", getApplications);

router.put("/:id", updateStatus);

router.delete("/:id", deleteApplication);

export default router;