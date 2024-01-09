function validateData(req, res, next) {
  const { title, description, categories } = req.body;

  if (title && title.length > 35) {
    return res.json({
      message: "Title must not be over 35 characters",
    });
  }
  if (description && description.length > 150) {
    return res.json({
      message: "Description must not exceed 150 characters",
    });
  }
  if (!categories || !Array.isArray(categories) || categories.length === 0) {
    return res.json({
      message: "Categories must be an array with at least 1 value",
    });
  }
  next();
}

export default validateData;
