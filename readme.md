# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

Follow these steps to get started with the project:
    
	1. Install Docker
	2. Run `docker-compose up` and wait for the downloads to complete, and image to be created
	3. Check if your server is running properly by pointing at http://localhost:3000/api/ping
