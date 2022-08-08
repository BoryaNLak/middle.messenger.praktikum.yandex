FROM node:14

WORKDIR /app

COPY . .

EXPOSE $PORT

RUN npm install

RUN npm run build

CMD ["node", "server.js"]