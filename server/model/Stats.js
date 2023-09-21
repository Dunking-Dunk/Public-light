import mongoose from "mongoose";

const StatsSchema = mongoose.Schema({
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
    light: {
        type: mongoose.Schema.ObjectId,
        ref: 'Light'
    }
},
{
    timestamps: true,
     toJSON: {
            transform(doc,ret) {
                ret.id = ret._id
                delete ret._id
            }
        } 
})

const Stats = mongoose.model("Stats", StatsSchema);

export default Stats;