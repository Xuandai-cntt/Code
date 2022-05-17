# Demo `Single Page Application` concept : 

Ngôn ngữ/libary sử dụng :

-   Frontend : Javascript core + jQuery.
-   Backend : PHP with Yii2 MVC framework.

Một webpage đơn giản, có các menu với link sau :

-   Dashboard : `<a href="#site/dashboard"> Dashboard </a>`
-   Orders : `<a href="#order"> Orders </a>`
-   News : `<a href="#news"> News </a>`
-   Setting : `<a href="#site/setting"> Setting </a>`

Một vùng div có id `page-wrapper` hiển thị nội dung thay đổi của các page.


# Deploy guide

1. Clone or download ZIP repo này.
2. Download `Yii 2 with basic application template` từ link sau http://www.yiiframework.com/download/
3. Extract yii2 framework vừa tải về và copy folder `vendor` --> sang root folder của git repo này.
4. Cấu hình vitual host cho project trên apache : 
```
<VirtualHost *:80>
        ServerName spa-manhnv.ga
        DocumentRoot /path/to/single_page_application_js_core/web

        <Directory /path/to/single_page_application_js_core/web>
                Options Indexes FollowSymLinks MultiViews
                AllowOverride None
                Order allow,deny
                allow from all
                RewriteEngine On
                RewriteCond %{REQUEST_FILENAME} !-f
                RewriteRule . /index.php [L]

        </Directory>

</VirtualHost>
```

# Demo tại đây :  http://spa-manhnv.ga
