const mongoose = require("mongoose");

const submissionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    titleSlug: {
      type: String,
      required: true,
      trim: true,
    },

    questionId: {
      type: String,
      required: true,
    },

    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },

    topicTags: [
      {
        type: String,
      },
    ],

    companyTags: [
      {
        type: String,
      },
    ],

    acceptanceRate: {
      type: Number,
      default: 0,
    },

    likes: {
      type: Number,
      default: 0,
    },

    dislikes: {
      type: Number,
      default: 0,
    },

    isPaidOnly: {
      type: Boolean,
      default: false,
    },

    language: {
      type: String,
      default: "",
    },

    runtime: {
      type: String,
      default: "",
    },

    memory: {
      type: String,
      default: "",
    },

    solvedAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Submission", submissionSchema);
