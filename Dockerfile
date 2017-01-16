FROM ubuntu:14.04
RUN apt-get -y update
RUN apt-get install -y wget dialog net-tools curl
RUN apt-get install -y nginx
COPY nginx.conf /etc/nginx/nginx.conf
RUN apt-get install -y python-software-properties
RUN curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
RUN apt-get -y install nodejs
WORKDIR /var/www
