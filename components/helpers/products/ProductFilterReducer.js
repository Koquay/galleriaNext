export const ProductFilterReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    default:
      return state;
  }
};

const initialState = {
  categories: {
    title: "CATEGORIES",
    category: [
      {
        name: "MEN",
        index: 0,
        items: [
          { name: "T-shirts", checked: false },
          { name: "Stripped Shirts", checked: false },
          { name: "Half Shirts", checked: false },
          { name: "Former Shirts", checked: false },
          { name: "Blazers", checked: false },
          { name: "Jackets", checked: false },
          { name: "Jeans", checked: false },
        ],
      },
      {
        name: "WOMEN",
        index: 1,
        items: [
          { name: "Lady T-shirts", checked: false },
          { name: "Women's Dress", checked: false },
          { name: "Exclusive Pants", checked: false },
          { name: "Branded Skirts", checked: false },
        ],
      },
      {
        name: "KIDS",
        index: 2,
        items: [
          "Kids T-shirts",
          "Kids Dress",
          "Kids Pants",
          "Kids Skirts",
          "Kids Tops",
        ],
      },
      {
        name: "SHOES & BAGS",
        index: 3,
        items: [
          "Branded Bags",
          "Exclusive Bags",
          "Branded Shoes",
          "Exclusive Shoes",
        ],
      },
      {
        name: "JEWELRY & WATCHES",
        index: 4,
        items: ["Earrings", "Watches", "Bangles"],
      },
      {
        name: "ACCESSORIES",
        index: 5,
        items: ["I-Phone", "Tablet", "Mobile", "Laptop"],
      },
    ],
  },
  priceFilter: {
    title: "PRICE RANGE",
    subTitle: "PRICE",
  },
  colors: {
    title: "COLORS",
    colors: ["red", "purple", "orange", "blue", "brown"],
  },
  sizeOptions: {
    title: "SIZES",
    sizes: ["XS", "S", "M", "LG", "XL"],
  },

  collectionFilter: {
    categories: [
      {
        category: {
          name: "MEN",
          items: [{}],
        },
      },
    ],
  },
};
