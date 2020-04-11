module.exports = function (req, res, next) {
  if (!req.user) {
    console.log('Not Logged In');
    res.redirect('http://localhost:3000/login');
  } else {
    next();
  }
};
