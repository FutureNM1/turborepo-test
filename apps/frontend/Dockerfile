FROM nginx:latest as production-stage
WORKDIR /app

COPY /dist /app
COPY nginx.conf /etc/nginx/nginx.conf

