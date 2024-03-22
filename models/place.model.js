import mongoose from 'mongoose';

const placeSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    tourtype: {
      type: String,
      default: 'uncategorized',
    },
    imageUrls: {
      type: Array,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Place = mongoose.model('Place', placeSchema);

export default Place;