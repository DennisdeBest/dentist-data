#Dentist-Data

##Install

Clone le repo git
CD dans repo git
Vagrant up
Vagrant ssh
cd /var/www/dentist.data.local
php bin/console doctrine:database:create
php bin/console doctrine:schema:update --force
composer install