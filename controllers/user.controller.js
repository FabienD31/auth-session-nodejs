exports.userNew = (req, res, next) => {
  res.render('signup');
}

exports.userCreate = async (req, res, next) => {
  res.end();
}