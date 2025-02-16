# Stage 1: Build the React app
FROM node:16-alpine AS builder
WORKDIR /app

# Copy only the package files first (to take advantage of Docker cache)
COPY frontend/package*.json ./frontend/
WORKDIR /app/frontend
RUN npm install

# Copy the rest of the React app and build it
COPY frontend/ .
RUN npm run build

# Stage 2: Set up PHP with Apache
FROM php:8.0-apache

# Enable mod_rewrite for pretty URLs and routing
RUN a2enmod rewrite

# Copy PHP backend code to a subdirectory (e.g., /api)
COPY backend/ /var/www/html/api/

# Copy the built React app to the web root
COPY --from=builder /app/frontend/build/ /var/www/html/

# Copy the .htaccess file into the web root for rewrite rules
COPY .htaccess /var/www/html/.htaccess

# Expose port 80
EXPOSE 80

# Apache runs by default as the container's entrypoint
