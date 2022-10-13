# OMEN

Figma: https://www.figma.com/file/GK5fBkK3mnoc2jnhX07Fen/CAPSTONE-Team-2%2F-MISSION-PLANNING?node-id=0%3A1

Trello Board: https://trello.com/b/tyHBZr5K/capstone-group-2

Google Docs: https://docs.google.com/document/d/13Q4tbENfxAfCO9qVy6zerPJf-4Yj7Ka9myY-6CkfdLc/edit

![banner-logo updated](https://user-images.githubusercontent.com/75449881/195404393-e7b62223-817b-4124-b723-3e5127f70b8c.png)

---

**If you have any suggestions for improvements to this readme, find mistakes, or even just notice a spelling or grammar error, please feel free to submit a pull request!**

OMEN is a revolutionary online mission planning environment which harnesses the power of collaboration of military members throughout the globe. Instead of duplicating mission planning efforts, easily sift through previously made products across many mission types and geographic areas saved in a centralized repository. Give back to your community by uploading your own missions for others to reference and utilize. Additionally, OMEN showcases PDF printing services containing mission information for mobile use in the field or emailing missions to preferred recipients. 

OMEN: Mission plan together.

---
# Heroku Hosting: 
front-end: https://omen-front-end.herokuapp.com/
backend: https://omen-database.herokuapp.com/

## Installation:

### Database
1. Ensure that you have installed postgres in a Docker container and psql inside the postgres image
-- important: `docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \
-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres`
2. Log in as user by running `psql -U postgres`
3. Create a local database inside your local postgres container by running the command:
`CREATE DATABASE mission_db`
4. Back in VS Code Ensure knex migrations and seeds are run by running the following commands:
`cd server`
`npx knex migrate:latest`
`npx knex seed:run`

### Server
1. To spin up the server, ensure all dependencies are installed
`cd OMEN/capstone-back-end`
`npm i`
2. Run the server by: `npm start:local` if you're running locally

### Front End
1. To spin up the front end ensure all dependencies are installed
`cd OMEN-SDI/front-end`
`npm i`
2. Run the app by: `npm start`

## Purpose
The purpose of this application is to consolidate mission planning products in centralized repository.


## Test
Cypress testing was used to test the front end. 

