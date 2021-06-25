const logRequest = (req, _res, next) => {
  next();
};

const jsonPostRequests = (req, res, next) => {
  if (
    req.method === "POST" &&
    req.headers["content-type"] !== "application/json;charset=utf-8" &&
    req.headers["content-type"] !== "application/json"
  ) {
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
