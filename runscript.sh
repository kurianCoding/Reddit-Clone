docker rm -f ng2
docker run -d --name ng2 -h learn -p 3001:3001 -v $PWD:/var/www   -it $1
