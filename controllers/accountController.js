const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const path = require("path");
const fs = require("fs");

let hardcodedUser = {
  email: "michaelakpan216@gmail.com",
  password: "mike1",
  firstname: "Michael",
  lastname: "Akpan",
  account_id: 123,
  avatar: null // Avatar image filename
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
    if (email !== hardcodedUser.email || password !== hardcodedUser.password) {
      return res.render("account/login", {
        title: "Login",
        errors: null,
        message: "Invalid credentials."
      });
    }

    const token = jwt.sign(
      {
        account_id: hardcodedUser.account_id,
        email: hardcodedUser.email,
        firstname: hardcodedUser.firstname
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

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

// POST: Handle registration (mocked)
const handleRegister = async (req, res) => {
  const { email, password, firstname, lastname } = req.body;
  hardcodedUser = {
    email,
    password,
    firstname,
    lastname,
    account_id: 123,
    avatar: null
  };

  res.render("account/login", {
    title: "Login",
    message: "Registration successful. Please login.",
    errors: null
  });
};

// GET: Account Management
const buildAccountManagement = (req, res) => {
  res.render("account/management", {
    title: "Account Management",
    account: hardcodedUser,
    message: null
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

// POST: Handle Account Update with Avatar Upload
const handleUpdateAccount = (req, res) => {
  const { firstname, lastname, email } = req.body;
  hardcodedUser.firstname = firstname;
  hardcodedUser.lastname = lastname;
  hardcodedUser.email = email;

  if (req.file) {
    const filename = req.file.filename;

    // Optional: delete old avatar
    if (hardcodedUser.avatar && fs.existsSync(`public/images/${hardcodedUser.avatar}`)) {
      fs.unlinkSync(`public/images/${hardcodedUser.avatar}`);
    }

    hardcodedUser.avatar = filename;
  }

  res.render("account/management", {
    title: "Account Management",
    account: hardcodedUser,
    message: "Account updated successfully."
  });
};

// GET: Change Password
const buildChangePassword = (req, res) => {
  res.render("account/change-password", {
    title: "Change Password",
    message: null
  });
};

// POST: Change Password
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

