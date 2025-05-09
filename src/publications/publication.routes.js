import { Router } from "express";
import { agregarPublicacion, listarPublicaciones, filtrarPorCurso } from "./publication.controller.js";

const router = Router();

router.post("/agregarPublicacion", agregarPublicacion);

router.get("/listarPublicaciones", listarPublicaciones);

router.get("/filtrarPorCurso", filtrarPorCurso);

export default router;