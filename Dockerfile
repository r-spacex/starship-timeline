FROM node:12.18.4 as build

WORKDIR /build

COPY . ./

RUN npm install --production && npm run build

FROM node:alpine

WORKDIR /app

COPY --from=build /build ./

EXPOSE 9000

CMD ["npm", "run", "serve"]