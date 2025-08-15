import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const ThreadSchema = new Schema({

})

const Thread = mongoose.model("thread",ThreadSchema);

export {Thread};