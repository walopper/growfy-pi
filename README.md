### Instalar NodeJS en RaspBerry

    curl -o nodejs node-v10.16.0-linux-armv6l.tar.gz https://nodejs.org/dist/v10.16.0/node-v10.16.0-linux-armv6l.tar.gz
    tar -xzf node-v10.16.0-linux-armv6l.tar.gz
    sudo cp -r node-v10.16.0-linux-armv6l/* /usr/local/

### Instalar Git en raspberry

    sudo apt-get install git

### Instalar app

    git clone https://github.com/walopper/growfy-pi.git
    cd growfy-pi
    npm i

### Inicializar la app

    npm run start