FROM node

WORKDIR /analyzer_frontend

COPY . .

RUN npm install

EXPOSE 3000

CMD npm run dev
