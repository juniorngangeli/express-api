FROM node:16-alpine

WORKDIR /usr/app/src

COPY package.*json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
