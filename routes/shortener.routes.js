
import { Router } from "express";
import { postURLShortener , getShortenerPage, redirectToShortLink} from "../controllers/postShortenerController.js";

const router = Router();

router.get("/", getShortenerPage);

router.post("/", postURLShortener )

router.get("/:shortCode", redirectToShortLink);

export const shortenedRoutes = router;