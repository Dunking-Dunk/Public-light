import mongoose from "mongoose";

const LightSchema = mongoose.Schema({
    address: {
        type: String,
        Required: true
    },
    coords: {
        type: [Number],
        Required: true
    },
    voltage: {
        type: Number,
        default: 0
    },
    power: {
        type: Number,
        default: 0
    },
    state: {
        type: Boolean,
        default: true
    },
    status: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
     toJSON: {
            transform(doc,ret) {
                ret.id = ret._id
                delete ret._id
            }
        } 
})

const Light = mongoose.model("Light", LightSchema);

export default Light;