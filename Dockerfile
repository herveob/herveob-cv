# Stage 0 - Build Frontend Assets
FROM node:16.13.0-alpine as build

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn build

# Stage 1 - Serve Frontend Assets
FROM fholzer/nginx-brotli
WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf

COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]