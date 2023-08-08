const User = require ('../models/userModel');
const asyncHandler = require ('express-async-handler');
const bcrypt = require ('bcrypt');
const jwt = require ('jsonwebtoken');

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

const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;
    console.log("Line:300", username, password);
    if (!username || !password) {
      res.status(400);
      throw new Error("All fields are mandatory!");
    }
    const user = await User.findOne({ username });
    console.log("Line:301", user.id);
    //compare password with hashedpassword

    // ### - sor far its working

    if (user && (await bcrypt.compare(password, user.password))) {
      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
            role: user.role,
            adminauth: user.adminauth
          },
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "1h" }
        );
        console.log("Line:302", accessToken);
      res.status(200).json({ accessToken });
    } else {
      res.status(401);
      throw new Error("Line:303, email or password is not valid");
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
  const {username, email, password, role, adminauth} = req.body;
  console.log ('line:1', username, email, password, role, adminauth);
  
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
    adminauth
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
    // user.roleNew = req.body.roleNew;
    // console.log("line:59", user.password);
    user.fuelType = req.body.fuelType;
    user.rentPerHour = req.body.rentPerHour;
    user.capacity = req.body.capacity;

    await user.save ();

    res.send ('User details updated successfully');
  } catch (error) {
    return res.status (400).json (error);
  }
});

module.exports = {
  currentUser,
  login,
  register,
  getallusers,
  deleteuser,
  adduser,
  edituser,
};
