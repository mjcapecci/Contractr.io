module.exports = function (req, res, next) {
  if (!req.user) {
    res.json({ isAuthenticated: false }).redirect('https://www.contractr.io');
  } else {
    next();
  }
};
