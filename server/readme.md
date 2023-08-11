Start Express Server: npm start / nodemon server
# Next:
1. Login (build protected jwt Token(bears data))
2. CurrentUser Route( looks for the token, and send the information to the fontend)

3. FrontEnd: call getCurrentUser Action, Reducer for getting the state
4. Call for the currentUser after the userLogin action happened 


# Adding new Routes:

- http://localhost:5000/api/users/requestResetPassword


{
"email":"weissenborn24seb@gmail.com"
}

- result:

{
  "link": "localhost://8090/passwordReset?token=9431145a68d5f41628f00010b7ec2e2abdca43e2eadf83df7c730eec6e66020a&id=64d49a1b9b1d87292090cb2c"
} -->


- http://localhost:5000/api/users/resetPassword

{
  "userId": "64d49a1b9b1d87292090cb2c",
  "token":"9431145a68d5f41628f00010b7ec2e2abdca43e2eadf83df7c730eec6e66020a",
  "password": "law123"
} 

- result:

{
  "message": "Password reset was successful"
} 