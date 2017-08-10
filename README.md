# AReMote-client
Client software for ARM-based remote.

_THIS PROJECT IS STILL FINDING ITSELF IN THE WORLD_

A little bit of why I started this project:

I constantly thought to myself while using Angular, why such a large dependancy for a small project? Why does this work the way it does? Why did they make it work that way? Now, I could have just done some research, but of course that's not as fun as building a light as air interface for a snappy experience!

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
