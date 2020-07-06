import Product from "../../models/Product";
import connectDb from "../../utils/connectDb";
import { connect } from "react-redux";

connectDb();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      await handleGetRequest(req, res);
      break;
  }
};

const handleGetRequest = async (req, res) => {
  const { filters } = req.query;
  const aggregatePipeline = buildAggregatePipeline(filters);

  try {
    const products = await Product.aggregate(aggregatePipeline);
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(500).send("Problem getting product collection");
  }
};

const buildAggregatePipeline = (filtersStr) => {
  const filters = JSON.parse(filtersStr);
  let { categoryFilters, filterPrice } = filters;
  let aggregatePipeline = [];

  let categoryMatch = buildCategoryMatch(categoryFilters);
  if (categoryMatch) {
    aggregatePipeline.push(categoryMatch);
  }

  let priceMatch = buildPriceRangeMatch(filterPrice);
  if (priceMatch) {
    aggregatePipeline.push(priceMatch);
  }
  console.log("aggregatePipeline", JSON.stringify(aggregatePipeline));

  checkForEmptyAggregate(aggregatePipeline);

  return aggregatePipeline;
};

const buildPriceRangeMatch = (filterPrice) => {
  console.log("filterPrice", filterPrice);

  if (filterPrice && filterPrice.maxPrice && filterPrice.minPrice) {
    let priceMatch = [];

    priceMatch.push({
      $and: [
        { $gte: ["$price", filterPrice.minPrice] },
        { $lte: ["$price", filterPrice.maxPrice] },
      ],
    });

    console.log("priceMatch", priceMatch);

    return { $match: { $expr: { $or: priceMatch } } };
  }

  return null;
};

const checkForEmptyAggregate = (aggregatePipeline) => {
  if (aggregatePipeline.length == 0) {
    aggregatePipeline.push({ $match: { _id: { $ne: null } } });
  }
};

const buildCategoryMatch = (categoryTypes) => {
  if (categoryTypes.length) {
    return { $match: { type: { $in: categoryTypes } } };
  }

  return null;
};
