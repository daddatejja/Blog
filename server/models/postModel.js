const {Schema, model} = require("mongoose")

const postSchema = new Schema({
    title: {type: String, required: true},
    category: {type: String, enum: ["Agriculture", "Anime", "Business", "Education", "Entertainment", "Art", "Gaming", "Investment", "Uncategorized", "Weather"], message: '{VALUE} is not supported.'}, 
    desc: {type: String, required: true},
    thumbnail: {type: String, required: true},
    creator: {type: Schema.Types.ObjectId, ref: "User"},
}, {timestamps: true})

module.exports = model("Post", postSchema)