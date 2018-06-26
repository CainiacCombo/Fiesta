FROM node:carbon

RUN mkdir -p /var/www/Fiesta
WORKDIR /var/www/Fiesta

COPY package*.json ./
RUN npm install

COPY . .
CMD [ "npm", "start" ]
