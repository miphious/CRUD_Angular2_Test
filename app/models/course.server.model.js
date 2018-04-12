const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
    course_code: {
        type: String,
        required: 'Course Code cannot be blank'
    },
    course_name: {
        type: String,
        required: 'Course Name cannot be blank'
    },
    section: {
        type: Number,
        required: 'Section cannot be blank'
    },
    semester: {
        type: String,
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Course', CourseSchema);
