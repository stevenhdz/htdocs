Installation Via Composer
If your computer already has PHP and Composer installed, you may create a new Laravel project by using Composer directly. After the application has been created, you may start Laravel's local development server using the Artisan CLI's serve command:

composer create-project laravel/laravel example-app

cd example-app

php artisan serve
The Laravel Installer
Or, you may install the Laravel Installer as a global Composer dependency:

composer global require laravel/installer

laravel new example-app

cd example-app

php artisan serve


php artisan make:model Articulos
php artisan make:migration create_articulos_table
php artisan make:controller ArticulosController --resource