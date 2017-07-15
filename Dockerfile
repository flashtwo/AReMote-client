FROM node as prodBuilder

WORKDIR /app/

ENV REPO_NAME="AReMote-client"
ENV GIT_URL="https://github.com/orange-lightsaber/$REPO_NAME.git"
RUN npm i -g webpack
RUN \
	git clone $GIT_URL \
	&& cd $REPO_NAME \
	&& npm i \
	&& webpack -p \
	&& mv -t /app/ index.html dist/

FROM nginx

WORKDIR /usr/share/nginx/html/

RUN rm /etc/nginx/conf.d/default.conf
COPY --from=prodBuilder /app/ ./