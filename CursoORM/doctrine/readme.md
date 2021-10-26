iniciar server: php -S localhost:5000

php vendor/bin/doctrine orm:schema-tool:create
php vendor/bin/doctrine orm:schema-tool:drop --force


en especifica:

$ cd ~/html_público
$ php -S localhost:8000 -t foo/