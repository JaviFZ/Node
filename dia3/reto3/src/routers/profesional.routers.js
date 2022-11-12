const {Router} = require ("express")
const router = Router();
const profesionalsCtrl = require("../controller/profesional.controller")




router.get("/profesional", profesionalsCtrl.getProfesional);

router.get("/profesionales", profesionalsCtrl.getProfesionales);

router.post("/profesional", profesionalsCtrl.postProfesional);

router.put("/profesional", profesionalsCtrl.putProfesional);

router.delete("/profesional", profesionalsCtrl.deleteProfesional);

module.exports = router;