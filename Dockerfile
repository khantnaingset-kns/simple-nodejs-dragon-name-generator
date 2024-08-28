FROM node:22-alpine3.19@sha256:30c5be9215c0ab992925f025a388d41e9be66c159a6cefb8f132ba829874e7f7 As build

WORKDIR /usr/local/app

COPY package*.json ./

RUN npm install --omit=dev

COPY src/. .

FROM gcr.io/distroless/nodejs22-debian11:nonroot

WORKDIR /app

COPY --from=build /usr/local/app /app

USER nonroot

EXPOSE 3000

CMD ["index.mjs"]