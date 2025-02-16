# ==============================
# Backend (PHP with Apache)
# ==============================
FROM php:8.2-apache AS backend

# Copy backend files
COPY backend /var/www/html/

# Expose Apache port
EXPOSE 8080

# Start Apache server
CMD ["apache2-foreground"]


# ==============================
# Frontend (React with Nginx)
# ==============================
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# Copy React source & build
COPY frontend ./
RUN npm run build


# ==============================
# Deploy Frontend with Nginx
# ==============================
FROM nginx:alpine AS frontend

# Copy built React files to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose Nginx port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
