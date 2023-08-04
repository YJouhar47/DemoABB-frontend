FROM node:18.6

WORKDIR /frontend

COPY package*.json ./

RUN npm install --legacy-peer-deps

RUN npm install -g ember-cli

EXPOSE 4200

ENTRYPOINT ["ember", "serve", "--proxy", "http://demoabb-identifier-1:80"]

COPY . .