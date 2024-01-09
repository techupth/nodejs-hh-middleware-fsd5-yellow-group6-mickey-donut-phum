export const validateAssignmentData = (req, res, next) => {
    const assignments = req.body;

    if (assignments.title.length > 35) {
        return res.json({
          message: `Title must not be over 35 characters`,
        });
    } 
    if (assignments.description.length > 150) {
        return res.json({
          message: `Description must not exceed 150 characters`,
        });
    } 
    if (!Array.isArray(assignments.categories) || assignments.categories.length === 0) {
        return res.json({
          message: `Categories must be an array with at least 1 value`,
        });
    } 
    next();
}