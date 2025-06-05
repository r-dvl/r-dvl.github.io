FROM node:14-alpine

LABEL org.opencontainers.image.source = "https://github.com/r-dvl/portfolio"
LABEL org.opencontainers.image.description "r-dvl portfolio"

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build"]