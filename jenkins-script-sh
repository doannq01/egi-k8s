#!/bin/bash

export DOCKER_IMAGE=doannq01/laravel-learn-k8s:$(date +'%d%m%Y%H%M%S')
export LARAVEL_DIR=./day-04/laravel-app
export DOCKER_USERNAME="doannq01"
export DOCKER_PASSWORD="dckr_pat_fFhbuHgAptPEW5SaXsroZCnbJQc"

cd $LARAVEL_DIR
# Build Docker image
echo "=============== Build Docker image ==============="
docker build -t $DOCKER_IMAGE .

# Login to Docker
echo "=============== Logging in to Docker Hub ==============="
docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD

# Push Docker image
echo "=============== Push Docker image to Docker Hub.... ==============="
docker push $DOCKER_IMAGE

# Run docker image
echo "=============== Run image to Docker Hub.... ==============="
docker stop laravel-app && docker rm laravel-app

docker run -d -it --name laravel-app -p 38000:8000 $DOCKER_IMAGE

