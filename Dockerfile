FROM alpine:3.9

RUN apk add --no-cache nodejs npm

COPY . /code
WORKDIR /code

RUN npm install 

CMD [ "node", "/code/index.js" ]
