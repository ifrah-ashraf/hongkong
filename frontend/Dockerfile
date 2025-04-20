# Development image
FROM node:18-alpine

WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

COPY frontend/ .

EXPOSE 3000

ENV NODE_ENV=development


CMD ["npm", "run", "dev"]
