FROM node:18-alpine

EXPOSE 3004

WORKDIR /doctor-dashboard-frontend

COPY package.json package-lock.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "prod"]
