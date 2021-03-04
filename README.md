# The Ultimate React Native Series | CodeWithMosh | Backend

**Project**: [DoneWithIt][project-url]

## Instruction

```sh
# clone this repo
git clone --branch https://github.com/Anik7303/DoneWithIt donewithit-backend
# `cd` into project folder
cd donewithit-backend
# install dependencies
npm install
```

after running these commands create a .env file in project root directory (where index.js file is)
and add the following variables to your .env file

```sh
PORT = 5000
HOST_IP = <your_local_area_ip_address> # eg. 192.168.0.100
MONGO_URI = <your_mongo_server_uri> # eg. mongodb://localhost:27017/donewithit
JWT_SECRET = <your_secret_key> # eg. laKDGIP43GHkl23
```

now just run command `npm run start`
or `npm run dev` to start server using nodemon (this is only for development)

## Routes

| token | route              | http method | props                                         | description                                 |
| ----- | ------------------ | ----------- | --------------------------------------------- | ------------------------------------------- |
|       | /api/auth          | post        | email, password                               | login and get access token                  |
|       | /api/user          | post        | name, email, password                         | register as a new user and get access token |
|       | /api/listings      | get         |                                               | get all listings                            |
| \*    | /api/listings      | post        | categoryId, description, images, price, title | add a new listing                           |
| \*    | /api/listings/:id  | put         | categoryId, description,images,price,title    | update an existing listing with id          |
| \*    | /api/listings/:id  | delete      |                                               | delete listing with id                      |
| \*    | /api/user/listings | get         |                                               | get all listings of a user                  |
| \*    | /api/notifications | post        | title, body                                   | sent a notification from server             |
| \*    | /api/messages      | get         |                                               | get all messages of a user                  |
| \*    | /api/messages      | post        | message, listingId                            | post a message to a user                    |

**\*** requires access token in `x-auth-token` | `authorization` header

[project-url]: https://github.com/Anik7303/DoneWithIt
