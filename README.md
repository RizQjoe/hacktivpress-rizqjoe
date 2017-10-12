# hacktivpress-rizqjoe

Program apps hacktivpress-RizQjoe, sebuah blogging system sederhana dengan menggunakan framework Express JS, dan juga work database MongoDB, serta menggunakan struktur MVC, pada program ini folder server sebagai backend dan folder client sebagai frond end

## REST API

List of user routes:

| Route             | HTTP          | Description      |
| -------------     |:-------------:| :----------------|
| /user/register    |POST           | Sign up with new user info|
| /user/login       |POST           | Sign in while get an access token based on credentials|
| /article          |GET            | Get all the articles info|
| /article/:id      |GET            | Get a single article info|
| /article          |POST           | Create a post (login user only)|
| /article/:id      |PUT            | Update a post with new  info (login user only)|
| /article/:id      |DELETE         | Delete a post (login user only)|

##RUN API server

$ cd server

$ npm install

$ npm start

For Client Side read README.md in
$ cd client

