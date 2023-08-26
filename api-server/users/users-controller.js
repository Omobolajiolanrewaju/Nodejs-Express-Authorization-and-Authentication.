const userDB = require("./users-db");

const createUser = (req, res) => {
  const user = req.body;

  user.api_key = `${user.username}_${user.password}`;

  if (user.username === "bolaji") {
    user.user_type = "admin";
  } else {
    user.user_type = "user";
  }

  userDB.users.push(user);

  return res.status(201).json({
    message: "User created successfully!!!",
    user: userDB.users,
  });
};

module.exports = {
  createUser,
};