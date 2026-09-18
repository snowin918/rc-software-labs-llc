import { Router } from "express";
import { createContact } from "../controllers/contactController.js";
import { getCaseStudies, getInsights, getSiteBlueprint } from "../controllers/siteController.js";

const router = Router();

router.get("/blueprint", getSiteBlueprint);
router.get("/insights", getInsights);
router.get("/case-studies", getCaseStudies);
router.post("/contact", createContact);

export default router;
