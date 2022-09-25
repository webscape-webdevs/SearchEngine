const express = require("express");
const Ad = require("../models/adsModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");


const router = express.Router();

// Get All Ads
router.route("/ads").get(catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 8;
  const adsCount = await Ad.countDocuments();

  const apiFeature = new ApiFeatures(Ad.find(), req.query)
    .search()
    .filter();

  let ads = await apiFeature.query;

  let filteredAdsCount = ads.length;

  apiFeature.pagination(resultPerPage);

  ads = await apiFeature.query;

  res.status(200).json({
    success: true,
    ads,
    adsCount,
    resultPerPage,
    filteredAdsCount,
  });
}));



// Create Ads 
router.route("/ads/new").post(catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "ads",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;

  const ad = await Ad.create(req.body);

  res.status(201).json({
    success: true,
    ad,
  });
}));



module.exports = router;
