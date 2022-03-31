## About

This is a next.js application for Software Engineering Intern position at Synapsis.id

## Running locally in development mode

To get started run this application, just clone the repository and run `npm install && npm run dev`:

    https://github.com/ahmadrafidev/se-intern-challenge
    npm install
    npm run dev

## Building and deploying in production

If you wanted to run this site in production, you should build the site first with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

## Folder Structure

- components
  - layout : layout components for next.js app, including footer, main navigation as a navbar, and layout for wrapping
  - new-cards: react components for adding new cards
- models: include mongoose schema for card CRUD
- pages
  - [id]: next.js pages for deleting the cards and edit cards with different id based on mongoose model
  - api
    - cards: API method for CRUD application, include post, get, put, and delete
  - 404: routing for 404 error
  - addcard: nextjs page for add new card
  - index: home page
