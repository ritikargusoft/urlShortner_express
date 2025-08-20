
import { Router } from "express";
import { postURLShortener , getURLShortener, redirectToShortLink} from "../controllers/postShortenerController.js";

const router = Router();

router.get("/", getURLShortener);

router.post("/", postURLShortener )

router.get("/:shortCode", redirectToShortLink);

export const shortenedRoutes = router;