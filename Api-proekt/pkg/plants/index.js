const mongoose = require('mongoose');

const Plant = mongoose.model(
    'plants',
    {
        name: String,
        likes_sun: Number,
        has_flower: Boolean,
        has_thorns: Boolean,
        found_on_continent: [continent],
        current_location: {city, contry},
        last_watering_date: Date,
        created: Date
    },
    'plants'
);


