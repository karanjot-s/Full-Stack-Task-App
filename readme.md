# FullStack Tasks App

## A full stack app with features:

- Adding a task
- Marking it complete / incomplete
- Deleting a task
- Filtering it on the basis of Completed / Incomplete
- User Authentication

## Tech Stack Used

- ReactJS with Redux
- NodeJS with ExpressJS
- MongoDB
- Bootstrap

## How to run

1. Download the code / clone the repository
2. Create a .env file with with the following properties in it
   - DB=\<link_to_your_mongodb_database>
   - TOKEN_SECRET=\<anything_random>
3. Then open terminal in the folder and run `yarn dev`
4. The App will run on `http://localhost:3000`

### Side Note (This will probably be removed in a few hours):

The app currently does not have signup feature so you would have to add a user manually with the following properties:

```
{
  email: string,
  password: string<hashed with the token_secret>
}
```

OR (Preffered)

- Open postman or anything similar
- Send the following POST request

```
POST http://localhost:8000/api/signup
body: {
  "email": "test1@example.com",
  "password": "123456"
}
```
