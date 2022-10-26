FROM node:16

ADD package.json /tmp/package.json
ADD src /tmp/src
ADD tsconfig.json /tmp/tsconfig.json
WORKDIR /tmp
RUN npm install
RUN ./node_modules/.bin/tsc
RUN mkdir -p /opt/app && cp -a ./node_modules /opt/app/ && cp -a ./dist /opt/app/

WORKDIR /opt/app
ADD ./package*.json ./tsconfig.json ./YandexCA.crt ./
CMD ["node", "dist/app.js"]
