module.exports = function (req, res, next) {
  if (!req.user) {
    res.json({ isAuthenticated: false });
  } else {
    next();
  }
};
