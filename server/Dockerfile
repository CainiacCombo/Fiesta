FROM node:carbon

RUN mkdir -p /usr/Fiesta
WORKDIR /usr/Fiesta

COPY package*.json ./usr/Fiesta
RUN npm install

COPY . .
CMD [ "npm", "start" ]
