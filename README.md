So, i'm getting bored and decided to create this restful api to operate CRUD to my dummy cats.

I don't know why i put it on github, but if you read my code because you are now learning Express.js you are free to clone and inspect my code. Hope it right for you~

## Requirement

- Node.js
- NPM or Yarn (i use yarn for this project)

## How to use?

- `cd` to the root directory of this repo
- run `npm install` or `yarn install` to install the dependecy modules
- You are ready to play!

## What You can do?

- Check connection to the restful api
- Get all your cats from collection
- Add cats to your collection
- Edit cats name from your collection
- Delete cats from your collection

## Routes / Endpoints

| No  | Route | Method | Desc             |
| --- | ----- | ------ | ---------------- |
| 1   | /     | GET    | Check connection |
| 2   | /cats | GET    | Get all cats     |
| 3   | /cats | POST   | Add a new cat    |
| 4   | /cats | PUT    | Edit cats name   |
| 4   | /cats | DELETE | Delete a cat     |
