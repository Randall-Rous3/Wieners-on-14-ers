const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Mountain = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: false },
    location:{ type: String, required: true },
    dogs: [{ type: Schema.Types.ObjectId, ref: 'dogs'}]
  },
  { timestamps: true }
)

module.exports = mongoose.model("moutains", Mountain)