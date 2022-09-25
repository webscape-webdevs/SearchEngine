const mongoose = require("mongoose");

const adSchema = mongoose.Schema({
  company: {
    type: String,
    required: [true, "Please Enter Ads Company"],
  },

  primaryText: {
    type: String,
    required: [true, "Please Enter Ads Primary Text"],
  },

  headline: {
    type: String,
    required: [true, "Please Enter Ads headline"],
  },

  description: {
    type: String,
    required: false,
  },

  cta: {
    type: String,
    required: [true, "Please Enter Ads Cta"],
  },

  ctaUrl: {
    type: String,
    required: [true, "Please Enter Ads ctaUrl"],
  },

  images: [
    {
      public_id: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        required: false,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Ad", adSchema);
