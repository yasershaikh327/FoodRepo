# Use an official PHP image with Apache
FROM php:8.2-apache

# Copy your PHP files into the container
COPY . /var/www/html/

# Set correct permissions
RUN chown -R www-data:www-data /var/www/html

# Expose port 80 for the Apache server
EXPOSE 80

# Start Apache server
CMD ["apache2-foreground"]
