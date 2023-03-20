FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
WORKDIR /app/public
COPY /public/ ./
WORKDIR /app/src
COPY /src/ ./
CMD [ "npm", "start" ]
EXPOSE 80