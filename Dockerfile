FROM node:22-alpine

WORKDIR /usr/src

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

# Static export lands in ./out; expose it at /public for the host
RUN npm run build && mv out /public
