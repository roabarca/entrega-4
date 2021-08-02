const express = require("express");
const router = express.Router();
const {Reserva} = require("../models");
router.use(express.json());


router.post("/", async (req,res) => {
    try {
        const reserva = await Reserva.create({
            id_sesion: req.body.id_sesion,
            id_maquina: req.body.id_maquina,
            timestamp: req.body.timestamp
        });
        return res.send(reserva);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/", async (req, res) => {
    try {
        const reserva = await Reserva.findAll();
        return res.send(reserva);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/:id", async (req, res) => {
    try {
        const reserva = await Reserva.findOne({
            where: {
                id: req.params.id,
            }
        })
        return res.send(reserva);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/:id", async (req, res) => {
    try {
        reserva = await Reserva.findOne({
            where: {
                id: req.params.id,
            }
        })
        if(!reserva) return res.status(400).send("Proyecto no existente");

        await reserva.destroy({
            where: {
                id: req.params.id,
            }
        })
        res.send(reserva);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/:id", async (req, res) => {
    try {
        edit = await Reserva.findOne({
            where: {
                id: req.body.id,
            }
        })
        if(!edit) return res.status(400).send("Proyecto no existente");

        await edit.update({
            id_sesion: req.body.id_sesion,
            id_maquina: req.body.id_maquina,
            timestamp: req.body.timestamp
            })
        res.send(edit);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;