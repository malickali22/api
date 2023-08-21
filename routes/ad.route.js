import express from "express";
import {
  createAd,
  deleteAd,
  getAd,
  getAds,
  updateAd,getuserAds,admingetAds,admindeleteAd, adminSelectedDeleteAd // Import the updateAd controller function
} from "../controllers/ad.controller.js";
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createAd);
router.delete("/:id", verifyToken, deleteAd);
router.delete("/admin/selected/:ids",  adminSelectedDeleteAd);
router.delete("/admin/:id", admindeleteAd);
router.get("/single/:id", getAd);
router.get("/", getAds);
router.get("/adminposts", admingetAds);
router.put("/:id", verifyToken, updateAd);
router.get("/userposts/:id", getuserAds);

export default router;
