kubectl delete deployment egi-laravel-deployment
kubectl delete service egi-laravel-service

kubectl apply -f laravel-deployment.yaml
kubectl apply -f laravel-service.yaml
