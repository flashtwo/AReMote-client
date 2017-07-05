# AReMote-client
software for ARM-based Kodi remote with LIRC integration.

### Installation
The application is served over HTTP to the electron client on the device so it's always up-to-date. I've packaged this process up into a Docker container.
```sh
docker pull orangelightsaber/aremote-client
```
Expose port ```80``` over port ```9101``` of host unless you change it in the application's config, keep the server up.
```sh
docker run --name aremote-server --restart unless-stopped -p 9101:80 -d orangelightsaber/aremote-client
```

### Development
Install environment and dependencies.
```sh
npm i
```
Start development server.
```sh
npm start
```
Production build, to ```dist/```.
```sh
webpack -p
```