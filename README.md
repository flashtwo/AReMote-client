# AReMote-client
Client software for ARM-based remote.

_THIS PROJECT IS STILL FINDING ITSELF, BUT INSTALLATION SCRIPTS AND GUIDE ARE IN THE MAKING_

This software currently supports the Raspberry Pi with an up-to-date version of Raspbian, Xorg, and Chromium(v59 and up) installed, and while not a requirement, it's highly recommended your devices have static local addresses, as well as the machine running the server if not installed locally on the Pi.

### Development
Install environment and dependencies. You will also need Docker-ce, Node, and Webpack installed globally.
```sh
npm i
```
Start development server.
```sh
npm start
```
Build client app to ```dist/``` (used by Docker build).
```sh
webpack -p
```
For production, a docker container is built from whatever is already pushed to github.
```sh
npm run-script package
```