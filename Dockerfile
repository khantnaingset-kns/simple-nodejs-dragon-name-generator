FROM node:22-alpine3.19@sha256:30c5be9215c0ab992925f025a388d41e9be66c159a6cefb8f132ba829874e7f7 AS build

WORKDIR /usr/local/app

COPY package*.json ./

RUN npm install --omit=dev

COPY src/. .

FROM gcr.io/distroless/nodejs22-debian11:nonroot@sha256:7dca4e47036ff55384a8825967a8462aa7b9557dc402acb6079cb8b74399037b

WORKDIR /app

COPY --from=build /usr/local/app /app

USER nonroot

EXPOSE 3000

CMD ["index.mjs"]