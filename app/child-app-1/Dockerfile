FROM node:20-slim

WORKDIR /child-app-1

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 5174
CMD [ "serve", "-s", "dist", "-l", "5174", "--single"]
