const mongoose = require('mongoose');

let tagsSchema = new mongoose.Schema({
    tags: [{
        type: String,
        required: true
    }]
});

const Tags = mongoose.model('tags', tagsSchema);

module.exports = Tags;