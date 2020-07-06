// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    // MONGO_SRV: "<insert-mongo-srv>",
    MONGO_SRV: "mongodb://galleria:galleria1@ds235378.mlab.com:35378/galleria",
    JWT_SECRET: "afdafuwerjqweasdjfafjadgaqjfafads",
    CLOUDINARY_URL: "https://api.cloudinary.com/v1_1/dxieudgzu/image/upload",
    CLOUDINARY_PRESET: "kkwpreset",
    CLOUDINARY_NAME: "dxieudgzu",
    STRIPE_SECRET_KEY: "sk_test_ybjdse51Sh1sgPPanyxXQANL007sdrs1D3",
    STRIPE_PUBLISHABLE_KEY: "pk_test_zG3kv6VtWOPTLvijoeeRZFZq00Gb2MWxiZ",
  },
};
