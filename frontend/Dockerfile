FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

# Viteの開発サーバーをホスト（0.0.0.0）に向けて起動
CMD ["npm", "run", "dev", "--", "--host"]