FROM node:18


WORKDIR /app

COPY package.json .

RUN npm install

COPY . /app

EXPOSE 3030

CMD ["npm", "start"]

