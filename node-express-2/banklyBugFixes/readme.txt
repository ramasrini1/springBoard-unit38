Run server
nodemon server.js

Run test : jest

Post request
http://localhost:3000/auth/register

{
 "username": "rs",
 "password": "rspass",
 "first_name": "rama",
 "last_name": "srinivas",
 "email": "ramasrini1@gmail.com",
 "phone": "858-695-1543"
}
Response:
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NTMyMzg3NjN9.TekVfq5AmjuyBJCgm9xxJwKbh6jlarEEZfBImVXsuqM"
}
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NTMyNzIxMzJ9.tfiehK1DhtSVo8BIe6qryz2HjWEQphIc0sYEXLTWt3Q"
}

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NTMyNzIxOTF9.Tn6FdteVWrLZNaqtCXJHsVc5-TdZQM6Ft-faPz1z2s0"
}
Get Users: Get Request
http://localhost:3000/users
{
    "_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NTMyMzg3NjN9.TekVfq5AmjuyBJCgm9xxJwKbh6jlarEEZfBImVXsuqM"
}
Response
{
    "users": [
        {
            "username": "rs",
            "first_name": "rama",
            "last_name": "srinivas"
        }
    ]
}

Get Request: Get users using username 'rs'
http://localhost:3000/users/rs
{
    "_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJzIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NTMyMzg3NjN9.TekVfq5AmjuyBJCgm9xxJwKbh6jlarEEZfBImVXsuqM"
}
{
    "user": {
        "username": "rs",
        "first_name": "rama",
        "last_name": "srinivas",
        "email": "ramasrini1@gmail.com",
        "phone": "858-695-1543"
    }
}
Post request
http://localhost:3000/auth/register
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNzIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NTMyNDI1NTJ9.97UyT0N7z8MYOPhdXUFPD3OXNDXDIRvAzPFYBaR_Dso"
}
{
 "username": "ss",
 "password": "sspass",
 "first_name": "sumana",
 "last_name": "srinivas1",
 "email": "ramasrini1@gmail.com",
 "phone": "858-695-1543"
}
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNzIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NTMyNDI1NTJ9.97UyT0N7z8MYOPhdXUFPD3OXNDXDIRvAzPFYBaR_Dso"
}

Patch request
http://localhost:3000/users/ss
{
    "_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNzIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE2NTMyNDI1NTJ9.97UyT0N7z8MYOPhdXUFPD3OXNDXDIRvAzPFYBaR_Dso",
    "first_name": "ss_new_1",
    "bad_field": "sss"
}
{
    "status": 400,
    "message": "Bad Request"
}

Post request
http://localhost:3000/auth/login
{
   "username": "admin",
   "password": "admin1"
}
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiYWRtaW4iOnRydWUsImlhdCI6MTY1MzI0MzI0OH0.fmBt3qwQEK4SDOmboVh6t92aGwYHNhACcVOH7OXmLPs"
}

Delete
http://localhost:3000/users/ss
request admin token
{
   "_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiYWRtaW4iOnRydWUsImlhdCI6MTY1MzI0MzI0OH0.fmBt3qwQEK4SDOmboVh6t92aGwYHNhACcVOH7OXmLPs"
}

{
    "message": "deleted"
}

