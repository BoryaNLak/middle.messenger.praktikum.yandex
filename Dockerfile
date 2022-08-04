FROM node:14

WORKDIR /app

COPY . .

RUN npm install

CMD ["node", "server.js", "--bind 0.0.0.0:$PORT"]