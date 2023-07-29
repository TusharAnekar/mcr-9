export const initialCategoriesState = {
  categories: [],
  selectedCategory: {},
};

export const categoriesReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_CATEGORIES":
      return { ...state, categories: payload };
    case "SET_SELECTED_CATEGORY":
      return { ...state, selectedCategory: payload };
    default:
      return state;
  }
};
