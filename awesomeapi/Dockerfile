FROM node:carbon AS base
WORKDIR /app

# --
FROM base AS dependencies
COPY package.json package-lock.json ./
COPY public  ./public
RUN npm install

# --
FROM dependencies AS build
WORKDIR /app
COPY . /app
RUN npm run build

# --
FROM node:8.9-alpine AS release
WORKDIR /app
COPY --from=dependencies /app/public ./public
COPY --from=dependencies /app/package.json ./
RUN npm install --only=production
COPY --from=build /app/dist ./

CMD ["node", "index.js"]
