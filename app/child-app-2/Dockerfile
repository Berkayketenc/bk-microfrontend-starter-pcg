FROM node:20-slim

WORKDIR /child-app-2

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 5175
CMD [ "serve", "-s", "dist", "-l", "5175", "--single"]
