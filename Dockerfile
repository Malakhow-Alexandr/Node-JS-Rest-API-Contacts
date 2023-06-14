FROM node:18


WORKDIR /app

COPY package.json .

RUN npm install

EXPOSE 3030

CMD ["node", "server"]