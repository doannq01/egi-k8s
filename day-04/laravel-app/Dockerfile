FROM php

RUN docker-php-ext-install pdo pdo_mysql bcmath

WORKDIR /app

COPY . /app

CMD php artisan serve --host=0.0.0.0 --port=8000
