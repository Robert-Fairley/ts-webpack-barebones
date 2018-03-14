# TypeScript Webpack Barebones

A barebones starter for a TypeScript front-end project using Webpack to bundle the application.

### Setup

All development dependencies are handled locally. No need to install anything globally.

```shell
npm install
```

### Build

*For development mode*
```shell
npm run build:dev
// OR
npm run watch:dev
```

*For production mode*
```shell
npm run build
```

### Test

```shell
npm test
```

### Serve Locally

```shell
npm start
```

---

### Docker Container

To run the Docker image you can either pull the image from DockerHub:
```shell
docker pull robertfairley/ts-webpack-barebones

docker run -p [PORT]:1234 --name [LOCAL_NAME] robertfairley/ts-webpack-barebones
```

Or you can build the image file from this folder so you can view changes you've made
within the Docker container environment.

1. Clone this repo.
2. Build the image:
```shell
docker build -t [IMAGE_NAME] .
```
3. Run the container:
```shell
docker run -p [PORT]:1234 --name [LOCAL_NAME] [IMAGE_NAME]
```
