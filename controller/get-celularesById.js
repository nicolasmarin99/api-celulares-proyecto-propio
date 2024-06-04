const celulares = require("../celulares.js")
const { request, response } = require("express")

const getCelularesByID = (req = require, res = response) => {
    let id = (req.params.id)

    let celular = celulares.find((celular) => {
        return celular.id === id
    })

    if (celular) {
        return res.json({
            ok: true,
            statusCode: 200,
            celular
        })

    } else {
        return res.json({
            ok: false,
            statusCode: 404,
            msg: "No hay ningun celular con ese ID"
        })
    }
}

module.exports = {
    getCelularesByID
}