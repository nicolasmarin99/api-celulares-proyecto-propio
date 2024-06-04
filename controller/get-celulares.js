const celulares = require("../celulares.js")
const { request, response } = require("express")

const getCelulares = (req = require, res = response) => {

    return res.json({
        ok: true,
        statusCode: 200,
        celulares
    })
}

module.exports = {
    getCelulares
}