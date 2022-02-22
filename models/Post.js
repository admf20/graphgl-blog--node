const {Schema, model} = require('mongoose');

const PostSchema = new Schema({
    authorId: {
        type: 'String',
        required: true
    },
    title: {
        type: 'String',
        required: true
    },
    body: {
        type: 'String',
        required: true
    }
}, {
    timestamp: true,
    versionKey: false
});

module.exports = model("Post", PostSchema);