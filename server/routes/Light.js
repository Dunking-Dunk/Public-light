import express from 'express'
import Light from '../model/Light.js'
import Stats from '../model/Stats.js'

const router = express.Router()

router.get('/', async (req, res) => {
    const lights = await Light.find({})

    res.status(200).json(lights)
})

router.post('/', async (req, res) => {
    const light = await Light.create(req.body)

    res.status(200).json(light)
})

router.get('/:id', async (req, res) => {
    const light = await Light.findById(req.params.id)
    res.status(200).json(light)
})

router.put('/:id', async (req, res) => { 
    const {state, voltage, power} = req.query
    const light = await Light.findByIdAndUpdate(req.params.id, {
        $set: {
            state: state,
            voltage: voltage,
            power: power
        }
    })

    await Stats.create({
        state,
        voltage,
        power,
        light: light.id
    })

    res.sendStatus(200)
})

export default router