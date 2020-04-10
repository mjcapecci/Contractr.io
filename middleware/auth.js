module.exports = function (req, res, next) {
  if (!req.user) {
    res.redirect('http://localhost:3000/login');
  } else {
    next();
  }
};
