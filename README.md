# HW-Week13-E-Commerce-Back-End

## Description
In this project the goal is to bild the back end for an e-commerce site.

Demo:


## User Story
  
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
  
## Acceptance Criteria
  
``` 
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Table of Content
* [Description](#description)
* [User Story](#user-story)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Questions](#questions)

##  Technologies
The following project was created with 
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Express](https://www.npmjs.com/package/express)
* [Dotenv](https://www.npmjs.com/package/dotenv)

## Usage
Getting started:
You will need to download a copy of the repository using 
<br>
```terminal
git clone git@github.com:DianeGaliano/HW-Week13-E-Commerce-Back-End.git
```
You will need to install Node.js and MySQL.

Install dependencies 
```terminal
npm i
``` 
Open up MySQL shell and input 
```terminal
source db/schema.sql
```
Then quit MySQL shell and input the following in your terminal
```terminal
npm run seed
```
to start running application input the following into your terminal
```terminal
npm start
```
Open up Insomnia core to GET, POST, PUT and DELETE from different routes.
## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<br>
This repository is licensed under the MIT license.

## Questions
Have any questions? Please contact me at [dianegaliano09@gmial.com](mailto:dianegaliano09@gmail.com). View more of my work at [DianeGaliano](https://github.com/DianeGaliano) 