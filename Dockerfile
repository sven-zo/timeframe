FROM node:9-alpine
ADD . /code
WORKDIR /code
RUN npm install
RUN npm run build
CMD ["npm", "serve-production"]