# task-list-api
Simple api listing tasks

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

- Nodejs/ npm

- Postman

### Installing

A step by step series of examples that tell you how to get a development environment running

- Clone the project repository

`git clone https://github.com/BILLthebuilder/task-list-api.git`

- Change the directory

`cd task-list-api`

- Install the dependencies

`npm install`

- Configure your local environment

```bash
cp .env.example .env
```

or

Create a `.env` file and copy details in `.env.example` to the `.env` file you created.

- To compile and run a production build

```bash
npm start
```

- To run a regular development build

```bash
npm run dev
```

### The Working API Endpoints

postman collection link coming soon

#### Auth Endpoints

| Request | Endpoint              | Function                |
| ------- | --------------------- | ----------------------- |
| POST    | `/personel/signup` | Register a new user     |
| POST    | `/personel/login` | Login a registered user |

#### Task endpoints

| Request | Endpoint                 | Function                                   |
| ------- | ------------------------ | ------------------------------------------ |
| POST    | `/tasks`           | Create tasks using faker.js                             |
| GET    | `/tasks?limit=10&page=1`       | View tasks with pagination                    |

## Running the tests

- Run `npm test`

## Deployment

- The app is hosted [here](https://tasks-api1.herokuapp.com/) on heroku

## Built With

- [Express](http://expressjs.com) - The web framework used
