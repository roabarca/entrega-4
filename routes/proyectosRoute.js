const express = require("express");
const router = express.Router();
const {Proyecto} = require("../models");
router.use(express.json());


router.post("/", async (req,res) => {
    try {
        const proyecto = await Proyecto.create({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            id_maker: req.body.id_maker,
        });
        return res.send(proyecto);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/", async (req, res) => {
    try {
        const proyecto = await Proyecto.findAll();
        return res.send(proyecto);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const proyecto = await Proyecto.findOne({
            where: {
                id: req.params.id,
            }
        })
        return res.send(proyecto);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        proj = await Proyecto.findOne({
            where: {
                id: req.params.id,
            }
        })
        if(!proj) return res.status(400).send("Proyecto no existente");

        await proj.destroy({
            where: {
                id: req.params.id,
            }
        })
        res.send(proj);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/:id", async (req, res) => {
    try {
        edit = await Project.findOne({
            where: {
                id: req.body.id,
            }
        })
        if(!edit) return res.status(400).send("Proyecto no existente");

        await edit.update({
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            id_maker: req.body.id_maker
            })
        res.send(edit);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;