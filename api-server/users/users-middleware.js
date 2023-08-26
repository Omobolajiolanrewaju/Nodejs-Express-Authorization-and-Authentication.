const usersDB = require("./users-db");

const validateUserCreation = (req, res, next) => {
  if (!req.body.username || !req.body.username.trim()) {
    return res.status(400).json({
      error: "username is required",
    });
  }

  if (!req.body.password || !req.body.password.trim()) {
    return res.status(400).json({
      error: "password is required",
    });
  }

  const validUserIndex = usersDB.users.findIndex(
    (user) =>
      user.username.toString().toUpperCase() ===
      req.body.username.toString().toUpperCase()
  );
  if (validUserIndex !== -1) {
    return res.status(409).json({
      error: "User already exists.",
    });
  }

  next();
};

module.exports = {
  validateUserCreation,
};