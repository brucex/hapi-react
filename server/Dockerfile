FROM node:boron

COPY . /var/www/server
WORKDIR /var/www/server
RUN npm install

EXPOSE 5000
CMD ["npm","start"]