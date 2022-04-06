const { Validator } = require('node-input-validator');

const Plant = {
    name: String,
    likes_sun: Number,
    has_flower: Boolean,
    has_thorns: Boolean,
    found_on_continent: [continent],
    current_location: {city, contry},
    last_watering_date: Date,
    created: Date

};

const validate = async (data, schema) => {
    let v = new Validator(data, schema);
    return await v.check(); 
};

module.exports = {
    Plant,
    validate
}