FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

# Install ALL dependencies (including devDependencies like typescript)
# so the build (tsc) works even when NODE_ENV=production
RUN npm install --include=dev

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["npm", "start"]
