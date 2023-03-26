# Utiliser l'image de base PHP 8.1
FROM php:8.1-fpm-alpine

# Installer les dépendances nécessaires pour composer
RUN apk add --no-cache curl git zip unzip libzip-dev libpng-dev libjpeg-turbo-dev freetype-dev

# Installer les extensions PHP nécessaires
RUN docker-php-ext-install pdo_mysql zip gd

# Créer un dossier pour l'application Laravel
RUN mkdir -p /var/www/html/BackendLaravel

# Définir le répertoire de travail pour l'image
WORKDIR /var/www/html/BackendLaravel

# Copier les fichiers de l'application Laravel dans le conteneur
COPY . .

# Définir la variable d'environnement pour permettre l'exécution de plugins en tant qu'utilisateur root
# Installer Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Définir la variable d'environnement pour permettre l'exécution de plugins en tant qu'utilisateur root
ENV COMPOSER_ALLOW_SUPERUSER=1

# Installer les dépendances de l'application Laravel avec Composer
RUN composer install --no-dev --no-scripts --no-progress --prefer-dist --optimize-autoloader

# Définir les permissions sur les fichiers de l'application Laravel
RUN chown -R www-data:www-data /var/www/html/BackendLaravel/storage /var/www/html/BackendLaravel/bootstrap/cache

# Définir les variables d'environnement pour Laravel
ARG DB_HOST
ARG DB_PORT
ARG DB_DATABASE
ARG DB_USERNAME
ARG DB_PASSWORD

ENV APP_ENV=production
ENV APP_KEY=base64:IUhiufhiufhzeiufhze84648fze8f4ze6f8ez4
ENV APP_DEBUG=false
ENV APP_URL=http://localhost
ENV DB_HOST=${DB_HOST}
ENV DB_PORT=${DB_PORT}
ENV DB_DATABASE=${DB_DATABASE}
ENV DB_USERNAME=${DB_USERNAME}
ENV DB_PASSWORD=${DB_PASSWORD}

# Exposer le port 80 pour le trafic HTTP
EXPOSE 8080

# Définir la commande pour exécuter l'application Laravel
CMD ["php", "artisan", "serve", "--host", "0.0.0.0", "--port", "8080"]
