const plant = require('../pkg/plants');
const validator = require('../pkg/plants/validate')

const getAll = async (req, res) => {
    try {
        let pl = await plant.getAllPlants();
        return res.status(200).send(pl);
    } catch(err) {
        console.log(err)
        return res.status(500).send(' Server Error!');
    }
};

const create = async (req, res) => {
    try {
      let =
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