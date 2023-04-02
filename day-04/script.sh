# Build docker image

docker build -t docker.io/doannq01/laravel-learn-k8s:1.0.0 ./laravel-app

kubectl delete deployment egi-laravel-deployment
kubectl delete service egi-laravel-service

kubectl apply -f laravel-deployment.yaml
kubectl apply -f laravel-service.yaml