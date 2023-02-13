FROM node:12

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn run build


CMD [ "npm", "start" ]
