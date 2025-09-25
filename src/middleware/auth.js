const AdminAuth = (req, res, next) => {
  console.log("admin authentication getting checked");

  const auth = "xyz";
  const authoricedAdmin = auth === "xyz";
  if (!authoricedAdmin) {
    res.status(401).send("unauthorised entry");
  } else {
    // res.send("Admin is verified");
    next();
  }
};
module.exports={AdminAuth};
