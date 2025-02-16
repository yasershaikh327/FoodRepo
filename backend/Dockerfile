# Use an official PHP Apache image
FROM php:8.2-apache

# Enable Apache mod_rewrite (for clean URLs)
RUN a2enmod rewrite

# Copy PHP files
COPY . /var/www/html/

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]
