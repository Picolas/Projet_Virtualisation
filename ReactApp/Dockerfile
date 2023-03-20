FROM node:alpine
COPY package.json ./
COPY package-lock.json ./
RUN npm install
WORKDIR /src
COPY ./ ./
CMD [ "npm", "start" ]
EXPOSE 80