FROM node as prodBuilder

WORKDIR /app/

ENV REPO_NAME="AReMote-client"
ENV GIT_URL="https://github.com/orange-lightsaber/$REPO_NAME.git"

RUN git clone $GIT_URL \
	&& cd $REPO_NAME \
	&& npm i -g webpack \
	&& npm i \
	&& webpack -p \
	&& mv -t /app/ index.html dist/

FROM nginx

WORKDIR /usr/share/nginx/html/

COPY --from=prodBuilder /app/ ./