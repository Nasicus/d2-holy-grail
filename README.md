# Diablo II - Holy Grail

The challenge to collect all Unique & Set items in "Diablo II - Lord of Destruction" is called the "Holy Grail".

Therefore this simple app allows you to track all found items from your Diablo II gaming experience.

Additionally it offers nice statistics of your found items and you can easily share your Holy Grail with your friends!

## Features

- Very fast & simple way to create a new Holy Grail
- Track all Unique & Set Items
- An on-type search quickly let's you find whatever you're looking for
- Share your own Holy Grail with friends in a read-only mode

![Sample image of the app](./sample.png)

## Contribute

If you want to contribute feel free to create [pull request](https://github.com/Nasicus/d2-holy-grail/pulls) or to create [issues](https://github.com/Nasicus/d2-holy-grail/issues) for new features or problems!

### Developing

The app basically consists of two parts, which both can run completely apart from each other.

#### server directory

Contains the server app which is written with Typescript, NodeJs and MongoDB.

Once started, the server will run under http://localhost:5000

#### client directory

Contains the client app which is written with TypeScript & React.

Once started, the app will run under http://localhost:3000

The client app gets its data from the server app, which means if you want to be able to retrieve data and save it to the server you have to run the server app.

#### Prerequisites

- [Node JS](https://nodejs.org) (with `npm`)
- An installed and running instance of [Mongo DB](https://docs.mongodb.com/manual/administration/install-community/)
  - As an alternative to installing MongoDB, you can use [Docker](https://www.docker.com/) to start a [MongoDB container](https://hub.docker.com/_/mongo). Example command: `docker run -p 27017:27017 mongo`

#### Initial Setup

Once you have checked out this repository you have to execute the following command in the `root`, the `client` and the `server` directories:

```
npm install
```

#### Development Steps

Whenever you'd like to develop you have to execute the following command in the the `client` and the `server` directories:

```
npm run dev
```

By running this command you should be good to go and by accessing the client app URL you should be able to test and use the app!

Alternatively you can also start both - the `client` and the `server` - at once, by executing the following command in the `root` directory:

```
npm run dev
```
