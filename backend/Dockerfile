FROM node:22-alpine

WORKDIR /app

# 先に依存関係の定義だけコピーしてインストール（ビルド高速化のため）
COPY package*.json ./
RUN npm install

# アプリケーションのコードをコピー
COPY . .

EXPOSE 3000

# 開発時は nodemon で起動してホットリロードを有効にする
CMD ["npm", "run", "dev"]