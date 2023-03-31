FROM php:8.1.8-fpm

RUN apt-get update \
    && apt-get install -y \
        curl \
        libpng-dev \
        libonig-dev \
        libxml2-dev \
        zip \
        unzip \
        git

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /var/www/html

COPY . .

RUN composer install

RUN php artisan key:generate
RUN php artisan config:cache
RUN php artisan route:cache

# Thiết lập quyền sở hữu cho các tệp
RUN chown -R www-data:www-data storage bootstrap/cache



ENV DB_CONNECTION=mysql
ENV DB_HOST=127.0.0.1
ENV DB_PORT=30306
ENV DB_DATABASE=learn_k8s
ENV DB_USERNAME=doannq_db
ENV DB_PASSWORD="Aa!@#123"

ENV APP_KEY=base64:Wp7k1dQXcyjuA+EHrbxVvIACr3dCj0RxpP2O+glxuNM=

EXPOSE 8000

CMD ["php", "artisan", "serve"]
