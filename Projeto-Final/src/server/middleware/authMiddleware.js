const authenticate = (req, res, next) => {
    if (req.session && req.session.user) {
      return next();
    }
    res.status(401).json({ message: 'Não autorizado' });
  };
  
  export default authenticate;
  