const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Hardcoded user credentials (since DB is down)
let hardcodedUser = {
  email: "michaelakpan216@gmail.com",
  password: "mike1",
  firstname: "Michael",
  lastname: "Akpan",
  account_id: 123
};

// GET: Login page
const buildLogin = (req, res) => {
  res.render("account/login", {
    title: "Login",
    errors: null,
    message: null
  });
};

// POST: Handle login
const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (email !== hardcodedUser.email) {
      return res.render("account/login", {
        title: "Login",
        errors: null,
        message: "No account found with that email."
      });
    }

    if (password !== hardcodedUser.password) {
      return res.render("account/login", {
        title: "Login",
        errors: null,
        message: "Incorrect password."
      });
    }

    const token = jwt.sign({
      account_id: hardcodedUser.account_id,
      email: hardcodedUser.email,
      firstname: hardcodedUser.firstname
    }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.cookie("jwt", token, { httpOnly: true });
    return res.redirect("/account");
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).render("account/login", {
      title: "Login",
      errors: null,
      message: "Server error. Please try again."
    });
  }
};

// GET: Register page
const buildRegister = (req, res) => {
  res.render("account/register", {
    title: "Register",
    message: null
  });
};

// POST: Handle registration (mock)
const handleRegister = async (req, res) => {
  const { email, password, firstname, lastname } = req.body;

  try {
    hardcodedUser = {
      email,
      password,
      firstname,
      lastname,
      account_id: 123
    };

    res.render("account/login", {
      title: "Login",
      message: "Registration successful. Please login.",
      errors: null
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).render("account/register", {
      title: "Register",
      message: "Server error. Please try again."
    });
  }
};

// GET: Account Management Page
const buildAccountManagement = (req, res) => {
  res.render("account/management", {
    title: "Account Management",
    account: hardcodedUser
  });
};

// GET: Update Account Page
const buildUpdateAccount = (req, res) => {
  res.render("account/update-account", {
    title: "Update Account",
    account: hardcodedUser,
    message: null
  });
};

// POST: Handle Account Update
const handleUpdateAccount = (req, res) => {
  const { firstname, lastname, email } = req.body;

  hardcodedUser.firstname = firstname;
  hardcodedUser.lastname = lastname;
  hardcodedUser.email = email;

  res.render("account/management", {
    title: "Account Management",
    account: hardcodedUser,
    message: "Account updated successfully."
  });
};

// GET: Change Password Page
const buildChangePassword = (req, res) => {
  res.render("account/change-password", {
    title: "Change Password",
    message: null
  });
};

// POST: Handle Password Change
const handleChangePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  if (currentPassword !== hardcodedUser.password) {
    return res.render("account/change-password", {
      title: "Change Password",
      message: "Current password is incorrect."
    });
  }

  hardcodedUser.password = newPassword;

  res.render("account/management", {
    title: "Account Management",
    account: hardcodedUser,
    message: "Password updated successfully."
  });
};

// Logout
const handleLogout = (req, res) => {
  res.clearCookie("jwt");
  res.redirect("/");
};

module.exports = {
  buildLogin,
  handleLogin,
  buildRegister,
  handleRegister,
  buildAccountManagement,
  handleLogout,
  buildUpdateAccount,
  handleUpdateAccount,
  buildChangePassword,
  handleChangePassword
};
