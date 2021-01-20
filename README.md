# Project

This repo is a simple React app that will look up Github users and display some information about them.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Get started

### Clone and install repository

1.	Make sure that you have Node.js and npm installed on your machine
2.	Clone this repo or download it as a zip folder
3.	Move to directory you want on your computer
4.	Open the downloaded repo with your favorite IDE ans run `npm install` in order to install required dependecies.
5.	Run `npm start`, at this point you can see the app at http://localhost:3000

## Create access token to authorize Github API

An access token is used to authorize the API calls. It is required for to comunicate with Github. Open https://github.com/settings/tokens and Generate new token.
Make sure to mark „User” when generating token. Once you have access token you should add it to the app.

### Add and secure access token

It is never a good practice to put API token directly in the source code. Create a .env file in the project root and put this line in it:
`REACT_APP_GITHUB_KEY = your_key_goes_here`

You may need to restart your app to use app work properly.




