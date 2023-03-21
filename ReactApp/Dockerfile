FROM node:alpine
COPY build/ /usr/share/nginx/html
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "/usr/share/nginx/html", "-l", "3000"]
