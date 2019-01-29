
const bearerToken = (req, res, next) => {
  const token = req.get('Authorization').replace(/Bearer\s/i, '');

  req.token = token;
  next();
};

const ensureAuth = (req, res, next) => {
  const token = req.get('Authorization');
  req.token = token;
  next();
};


module.exports = {
  bearerToken,
  ensureAuth
};