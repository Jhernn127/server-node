FROM node:19
WORKDIR /usr/src/app

COPY package*.json ./

RUN nom install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]