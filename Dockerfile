FROM node:23-alpine3.19 AS build

WORKDIR /usr/local/app

COPY package*.json ./

RUN npm install --omit=dev

COPY src/. .

FROM build AS runtime

WORKDIR /app

COPY --from=build /usr/local/app /app

USER nonroot

EXPOSE 3000

CMD ["index.mjs"]