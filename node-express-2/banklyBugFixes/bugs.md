
- Bugs Report

- Bug #1 Returns all info about user. 
- Fix 
In /models/users getAll(), Modified the query to return only username, first_name, and last_name

- Bug #2 Should return user not found error, status code 404 for unknown user
- Fix
In /models/users get(username), the return statement was missing when unknown user was sent in the request.

- Bug #3 Admin flag in admin account was not returned
- Fix
In /models/auth await keyword was missing before authenticate function

- Bug #4 verify with different secret key should fail
- Fix 
  In /middleware/auth
  Use verify instead of decode
  //let payload = jwt.decode(token) is replaced with
  let payload = jwt.verify(token, SECRET_KEY); 

- Bug #5 Patch route: Ensure only {first_name, last_name, phone, email}
  should be updated. Throw an error when other fields or unknown field are 
  sent in the request
- Fix Validate the json request and throw an error if user tries to update any 
  other fields.
In /models/user add json validate schema
jsonschema.validate(fields, userUpdateSchema);


- Bug #6 delete route: Handling of deleting non users
- Fix 
 In /users/ Deleting a non exiting user should give 404 error.
  added await 
  await User.delete(req.params.username); 





