FROM node:16.4.2
WORKDIR /usr/src/app

COPY package*.json ./

ENV MONGO_URL "mongodb://mongo:27017"
ENV DB_NAME points
ENV COL_NAME dataPoints


RUN npm install -D @swc/cli @swc/core
RUN npm install


COPY . .

RUN npm run build

CMD ["npm", "run", "dev"]
