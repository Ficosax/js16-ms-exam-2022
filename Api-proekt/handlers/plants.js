const plant = require('../pkg/plants');
const validator = require('../pkg/plants/validate')

const getAll = async (req, res) => {
    try {
        let pl = await plant.getAllPlants();
        return res.status(200).send(pl);
    } catch(err) {
        console.log(err)
        return res.status(500).send(' Internal Server Error!');
    }
};

const create = async (req, res) => {
    try {
        let v = await validator.validate(req.body, validator.Plant);
        let p = await plant.addPlant(req.body);
        return res.status(201).send(p);
    } catch(err) {
        console.log(err);
        return res.status(500).send('Internal Server Error!')
    };
};

const getOne = async (req, res) => {
    try {
        let pl = await plant.getOne(req.params.id);
        return res.status(200).send(pl)
    } catch(err) {
        console.log(err); 
        return res.status(500).send('Internal Server Error!')
    }
};

const update = async (req, res) => {
    try {
        let pl = await plant.updatePlant(req.params.id, req.body);
        return res.status(204).send(pl);
    } catch(err) {
        console.log(err); 
        return res.status(500).send('Internal Server Error!')
    }
};

module.exports = {
    getAll,
    create,
    getOne,
    update,
    updatePartial,
    remove
}