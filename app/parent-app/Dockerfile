FROM node:20-slim

WORKDIR /parent-app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173", "--single"]
