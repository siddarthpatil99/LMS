import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    instructorName: {
      // type: mongoose.Schema.Types.ObjectId,
      type: String,
      ref: "User",
      // required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    thumbnail: {
      public_id: {
        type: String,
        required: true
      },
      url: {
        type: String,
        required: true
      }
    },
    instructorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Instructor',
      required: true,
    }
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

export default Course;