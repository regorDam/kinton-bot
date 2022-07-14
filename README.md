# kinton-Bot

[![KC](https://games.kintoncloud.com/assets/img/PoweredBy.png)](https://kintoncloud.com)

[//]: # (branch - https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
[//]: # (event parameter - https://github.com/github/docs/actions/workflows/main.yml/badge.svg?event=pull_request)
![example branch parameter](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=feature-1)
[![GitHub commits](https://github.com/regorDam/kinton-bot/actions/workflows/release-package.yml/badge.svg)](https://github.com/regorDam/kinton-bot/commits/master)
[![Node.js CI](https://github.com/regorDam/kinton-bot/actions/workflows/release-package.yml/badge.svg)](https://github.com/regorDam/kinton-bot/actions/workflows/release-package.yml)

# New Features!

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)


### Installation

KC-Bot requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd PROJECT_FOLDER
$ npm install -d
$ node index.js
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node index.js
```

### Docker
KC-Bot is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 80, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd PROJECT_FOLDER
docker build -t joemccann/dillinger:${package.json.version} .
```
This will create the kc-bot image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of KC-Bot.

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1
```

### Todos

 - Write MORE Tests
 - Add Commands list

License
----

MIT


**Code & Love!**
