const express = require("express");
const router = express.Router();
const {Sesion} = require("../models");
router.use(express.json());


router.post("/", async (req,res) => {
    try {
        const sesion = await Sesion.create({
            id_proyecto: req.body.id_proyecto,
            cumplida: req.body.cumplida
        });
        return res.send(sesion);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/", async (req, res) => {
    try {
        const sesion = await Sesion.findAll();
        return res.send(sesion);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const sesion = await Sesion.findOne({
            where: {
                id: req.params.id,
            }
        })
        return res.send(sesion);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        sesion = await Sesion.findOne({
            where: {
                id: req.params.id,
            }
        })
        if(!sesion) return res.status(400).send("Proyecto no existente");

        await sesion.destroy({
            where: {
                id: req.params.id,
            }
        })
        res.send(sesion);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/:id", async (req, res) => {
    try {
        edit = await Sesion.findOne({
            where: {
                id: req.body.id,
            }
        })
        if(!edit) return res.status(400).send("Proyecto no existente");

        await edit.update({
            id_proyecto: req.body.id_proyecto,
            cumplida: req.body.cumplida
            })
        res.send(edit);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;