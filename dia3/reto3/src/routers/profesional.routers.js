const {Router} = require ("express")
const router = Router();
const profesionalsCtrl = require("../controller/profesional.controller")




// router.get("/profesionales", profesionalsCtrl.getProfesional);

router.get("/profesionales", profesionalsCtrl.getProfesionales);

router.post("/profesionales", profesionalsCtrl.postProfesional);

router.put("/profesionales", profesionalsCtrl.putProfesional);

router.delete("/profesionales", profesionalsCtrl.deleteProfesional);

module.exports = router;