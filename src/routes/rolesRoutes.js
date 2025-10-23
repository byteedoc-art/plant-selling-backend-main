 import express from "express";
  import RolesControllers from "../controllers/rolesController.js";
 const RolesRouter =express.Router();


 RolesRouter.post("/create", RolesControllers)
 export default RolesRouter;
