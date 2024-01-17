FROM node:18-alpine

EXPOSE 3443

WORKDIR /healthquire-dashboard

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "dev"]
