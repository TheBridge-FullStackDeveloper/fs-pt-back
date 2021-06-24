const checkAdmin = (req, res, next) => {
  const {admin} = req.query;
  if(admin !== 'soy-admin') {
    res.status(401).json({ text: 'No puedes pasar'})
    return;
  }
  next();
}

module.exports = checkAdmin;
