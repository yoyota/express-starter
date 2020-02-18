FROM node:lts-alpine

WORKDIR /app
ENV NODE_ENV production
COPY ./package*.json ./
RUN npm ci --only=prod
COPY . .

CMD ["npm", "start"]
