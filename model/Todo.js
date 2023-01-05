import mongoose from "mongoose";

const TodoScheme = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const todo = mongoose.model('todo', TodoScheme);

export default todo;