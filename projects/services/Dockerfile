FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "app.js"]["curl", "-k", "https://127.0.0.1:3000/api/commit/1"]
EXPOSE 3000