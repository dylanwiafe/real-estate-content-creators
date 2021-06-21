const logRequest = (req, _res, next) => {
  console.log(`request incoming for path ${req.path}`);
  next();
};

const jsonPostRequests = (req, res, next) => {
  console.log("req.headers", req.headers["content-type"]);
  if (
    req.method === "POST" &&
    req.headers["content-type"] !== "application/json;charset=utf-8" &&
    req.headers["content-type"] !== "application/json"
  ) {
    console.log(req.method, req.headers);
    return res.status(400).json({
      message:
        "POST requests must contain content-type=application/json;charset=UTF-8",
    });
  } else {
    next();
  }
};
module.exports = {
  logRequest,
  jsonPostRequests,
};
