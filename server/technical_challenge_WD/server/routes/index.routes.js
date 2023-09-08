const router = require("express").Router();
const Phone = require("./../models/Phone.model");

router.get("/", (req, res, next) => {
    res.json("All good in here");
});

/* Iteration #1
Create a REST API (NodeJS) server that meets the following requirements:

Route	HTTP Verb	Description
/phones	GET	Show all phones (use the phones.json) as fake data
/phones/:id	GET	Show a phone details*/

// const phones = require("../phones.json");

router.get("/phones", async (req, res, next) => {
    try {
        const allPhones = await Phone.find();
        res.json(allPhones);
    } catch (error) {
        next(error);
    }
});

router.get("/phones/:id", async (req, res, next) => {
    try {
        const phoneId = req.params._id;
        const onePhone = await Phone.findById(phoneId);
        res.json(onePhone);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
