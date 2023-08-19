const User = require ('../models/userModel');
const asyncHandler = require ('express-async-handler');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');

const {
  requestPasswordReset,
  resetPassword,
} = require ('../service/auth.service');
const {log} = require ('handlebars');

//@desc Current User Info
//@route GET /api/users/current
//@access private

const currentUser = asyncHandler (async (req, res) => {
  res.json (req.user);
});

//@desc Login User
//@route POST /api/users/login

// const login = asyncHandler(async (req, res) => {

//     const { username, password } = req.body

//     try {
//         const user = await User.findOne({ username, password })
//         // console.log("line:103", user);
//         if (user) {
//             res.send(user)
//         }
//         else {
//             return res.status(400,).json(error);

//         }
//     } catch (error) {
//         return res.status(400).json(error);
//     }
// });

// #new

// const login = asyncHandler (async (req, res) => {
//   const {username, password} = req.body;
//   console.log ('Line:0.1', username, password);

//   if (!username || !password) {
//     res.status (400);
//     throw new Error ('Line:101, All fields are mandatory!');
//   }
//   const user = await User.findOne ({username});
//   console.log ('Line:101.1', user);

// //  # - so far so good
//   //compare password with hashedpassword

//   if (user && (await bcrypt.compare(password, user.password))) {
//     const accessToken = jwt.sign(
//       {
//         user: {
//           username: user.username,
//           // email: user.email,
//           id: user._id,
//         },
//       },
//       process.env.ACCESS_TOKEN_SECRET,
//       {expiresIn: '15m'}
//     );
//     console.log("line:101.2", accessToken);
//     res.status (200).json ({accessToken});
//   } else {
//     res.status (401);
//     throw new Error ('email or password is not valid');
//   }
// });

// ## alternative

//@desc Login user
//@route POST /api/users/login
//@access public

const login = asyncHandler (async (req, res) => {
  const {username, password} = req.body;
  console.log ('Line:300', username, password);
  if (!username || !password) {
    res.status (400);
    throw new Error ('All fields are mandatory!');
  }
  const user = await User.findOne ({username});
  console.log ('Line:301', user.id);
  //compare password with hashedpassword

  // ### - sor far its working

  if (user && (await bcrypt.compare (password, user.password))) {
    const accessToken = jwt.sign (
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
          role: user.role,
          adminauth: user.adminauth,
          userauth: user.userauth,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {expiresIn: '1h'}
    );
    console.log ('Line:302', accessToken);
    res.status (200).json ({accessToken});
  } else {
    res.status (401);
    throw new Error ('Line:303, email or password is not valid');
  }
});

//@desc Register User
//@route POST /api/users/register

// const register = asyncHandler(async (req, res) => {

//     try {
//         const newuser = new User(req.body)
//         console.log("line:700", newuser);

//         await newuser.save()
//         res.send('User registered successfully')
//     } catch (error) {
//         return res.status(400).json(error);
//     }
// });

// #new

// #####

const adduser = asyncHandler (async (req, res) => {
  const {username, email, password, role, adminauth, userauth} = req.body;
  console.log ('line:1', username, email, password, role, adminauth, userauth);

  if (!username || !email || !password) {
    res.status (400);
    throw new Error ('All fields are mandatory');
  }

  const userAvailable = await User.findOne ({email});
  if (userAvailable) {
    res.status (400);
    throw new Error ('User already registered!');
  }

  //Hash Password
  const hashedPassword = await bcrypt.hash (password, 10);
  console.log ('line:2', hashedPassword);

  const user = await User.create ({
    username,
    email,
    password: hashedPassword,
    role,
    adminauth,
    userauth,
  });

  // ### - here the use of backtick is correct
  console.log ('line:3', `${user}`);

  if (user) {
    res.status (201).json ({_id: user.id, email: user.email});
  } else {
    res.status (400);
    throw new Error ('User data is not valid');
  }

  res.json ({message: 'Register the user'});
});

// #####

// #####

const register = asyncHandler (async (req, res) => {
  const {username, email, password} = req.body;
  console.log ('line:1', username, email, password);

  if (!username || !email || !password) {
    res.status (400);
    throw new Error ('All fields are mandatory');
  }

  const userAvailable = await User.findOne ({email});
  if (userAvailable) {
    res.status (400);
    throw new Error ('User already registered!');
  }

  //Hash Password
  const hashedPassword = await bcrypt.hash (password, 10);
  console.log ('line:2', hashedPassword);

  const user = await User.create ({
    username,
    email,
    password: hashedPassword,
  });

  // ### - here the use of backtick is correct
  console.log ('line:3', `${user}`);

  if (user) {
    res.status (201).json ({_id: user.id, email: user.email});
  } else {
    res.status (400);
    throw new Error ('User data is not valid');
  }

  res.json ({message: 'Register the user'});
});

// #####

//@desc Get All User
//@route GET /api/users/getallusers

const getallusers = asyncHandler (async (req, res) => {
  try {
    const users = await User.find ();
    res.send (users);
  } catch (error) {
    return res.status (400).json (error);
  }
});

//@desc Delete User
//@route POST /api/users/deleteuser

const deleteuser = asyncHandler (async (req, res) => {
  try {
    await User.findOneAndDelete ({_id: req.body.userid});

    res.send ('User deleted successfully');
  } catch (error) {
    return res.status (400).json (error);
  }
});

//@desc Add User
//@desc Not working at the moment!!!
//@route POST /api/users/adduser

// const adduser = asyncHandler (async (req, res) => {
//   try {
//     const newuser = new User (req.body);
//     console.log ('line:4', newuser);
//     await newuser.save ();
//     res.send ('User added successfully');
//   } catch (error) {
//     return res.status (400).json (error);
//   }
// });

//@desc Edit User
//@desc Not working at the moment!!!
//@route POST /api/users/edituser

const edituser = asyncHandler (async (req, res) => {
  try {
    const user = await User.findOne ({_id: req.body._id});
    console.log ('line:5', user);

    user.username = req.body.username;
    console.log ('line:6', user.username);

    user.password = req.body.password;
    console.log ('line:7', user.password);

    user.role = req.body.role;
    console.log ('line:8', user.role);

    user.adminauth = req.body.adminauth;
    console.log ('line:9', user.adminauth);

    user.userauth = req.body.userauth;
    console.log ('line:10', user.userauth);

    await user.save ();

    res.send ('User details updated successfully');
  } catch (error) {
    return res.status (400).json (error);
  }
});

// const example = asyncHandler(async (req, res) => {
//   try {
//     const user = await User.findOne({ _id: req.body._id });
//     console.log('line:5', user);

//     await user.save();

//     res.send('User details updated successfully');
//   } catch (error) {
//     return res.status(400).json(error);
//   }
// }
// );

// ### - Add: resetPasswordRequestController

const resetPasswordRequestController = asyncHandler (async (req, res) => {
  // # need to add requestpasswordReset auth.service
  try {
    const requestPasswordResetService = await requestPasswordReset (
      req.body.email
    );
    return res.json (requestPasswordResetService);
  } catch (error) {
    return res.status (400).json (error);
  }
});

const resetPasswordController = async (req, res) => {
  const resetPasswordService = await resetPassword (
    req.body.userId,
    req.body.token,
    req.body.password
  );
  return res.json (resetPasswordService);
};

// ### - new

const googleLogin = asyncHandler (async (req, res) => {
  try {
    console.log ('line:1, hi');
    const {token, secret} = req.body;
    console.log ('line:2', token);
    console.log ('line:3', secret);

    let decodedData = jwt.decode (token, secret);
    console.log ('line:4', decodedData);
    console.log ('line:5', decodedData.email);
    let email = decodedData.email;

    const user = await User.findOne ({email});
    // console.log ('Line:6', user.id);

    // ### ckecks if no user exists - if not it will create a new user in the database - otherwise it will skip this command
    if (!user) {
      let decodedData = jwt.decode (token, secret);
      const email = decodedData.email;
      console.log ('line:6', email);
      const name = decodedData.name;
      console.log ('line:7', name);

      //   console.log("line:3.2", decodedData);

      const hashedPassword = await bcrypt.hash ('1234', 10);
      console.log ('line:0', hashedPassword);

      const user1 = await User.create ({
        username: name,
        email: email,
        userauth: true,
        password: hashedPassword,
      });

      console.log ('line:8', `${user1}`);

      console.log ('line:999, No User found');

      const accessToken = jwt.sign (
        {
          user: {
            username: name,
            email: email,
            role: 'user',
            userauth: true,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '1h'}
      );

      return res.json (accessToken);
    }

    // ### checks if user exists and if yes it will do the login in and send the auth token to the frontend
    if (user) {
      let decodedData = jwt.decode (token, secret);
      const email = decodedData.email;
      console.log ('line:10', email);
      const name = decodedData.name;
      console.log ('line:11', name);

      const accessToken = jwt.sign (
        {
          user: {
            username: name,
            email: email,
            role: 'user',
            userauth: true,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '1h'}
      );
      console.log ('line:1222 - Here is the Auth Token', accessToken);
      return res.json (accessToken);
    }

    // console.log ('line:13', decodedData);
    // return res.json (decodedData);
  } catch (error) {
    return res.status (400).json (error);
  }
});

const facebookLogin = asyncHandler (async (req, res) => {
  try {
    console.log ('line:1, hi');
    const {userfacebook} = req.body;
    console.log ('line:2', userfacebook);
    console.log ('line:3', userfacebook.name);
    console.log ('line:4', userfacebook.email);
    let email = userfacebook.email;
    console.log("line:5", email);

    // let decodedData = jwt.decode (token, secret);
    // console.log ('line:4', decodedData);
    // console.log ('line:5', decodedData.email);
    // let email = decodedData.email;

    const user = await User.findOne ({email});
    // console.log ('Line:6', user.id);

    // ### ckecks if no user exists - if not it will create a new user in the database - otherwise it will skip this command

    if (!user) {
     

      const hashedPassword = await bcrypt.hash ('1234', 10);
      console.log ('line:7', hashedPassword);

      const user1 = await User.create ({
        username: userfacebook.name,
        email: userfacebook.email,
        userauth: true,
        password: hashedPassword,
      });

      console.log ('line:8', `${user1}`);

      console.log ('line:9, We created a new account for you!');

      const accessToken = jwt.sign (
        {
          user: {
            username: userfacebook.name,
            email: userfacebook.email,
            role: 'user',
            userauth: true,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '1h'}
      );

      return res.json (accessToken);
    }

    // ### checks if user exists and if yes it will do the login in and send the auth token to the frontend
    if (user) {
  
      const accessToken = jwt.sign (
        {
          user: {
            username: userfacebook.name,
            email: userfacebook.email,
            role: 'user',
            userauth: true,
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '1h'}
      );

      console.log("line:11", accessToken);

      console.log ('line:12, We send the Access Token to the Front End!');
      // console.log ('line:1222 - Here is the Auth Token', accessToken);
      return res.json (accessToken);
    }

    // console.log ('line:13', decodedData);
    return res.json (decodedData);
  } catch (error) {
    return res.status (400).json (error);
  }
});

// ### - new

module.exports = {
  currentUser,
  login,
  register,
  getallusers,
  deleteuser,
  adduser,
  edituser,
  resetPasswordRequestController,
  resetPasswordController,
  googleLogin,
  facebookLogin
};
