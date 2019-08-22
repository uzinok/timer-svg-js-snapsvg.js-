Таймер js/svg/snapsvg.js
=====================

Подготовил: [Александр Зиновьев](http://uzinok.ru/)
-----------------------------------

Команды
-----------------------------------

* gulp - сборка проекта и запуск сервера
* gulp build - сборка проекта
* gulp clean - удаление готовой сборки
* gulp sprite - создание SVG спрайта
* gulp opti_img - оптимизация графики (.jpg, .png, .svg, .webp)
* gulp webp_convert - конвертация графики в .webp (.jpg, .png => .webp)

особенности
-----------------------------------

* js библиотеки хранятся в src/scripts/
* файл стилей, все .html и файлы из папки src/js/ минифицируются
* препроцессор стилей less
* есть карта стилей gulp-sourcemaps
* стили обновляются без перезагрузки страницы

перед установкой сборщика необходимо:
-----------------------------------

* [устнаовить node.js](https://nodejs.org/) используется пакет npm
* [глобально установить gulp](https://gulpjs.com/) для работы команд gulp
* [глобально установить browser-sync](https://browsersync.io/) для работы виртуального сервера