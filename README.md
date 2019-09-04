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
* готовая сборка: /build/
* скрипты: /build/js/

перед установкой сборщика необходимо:
-----------------------------------

* [устнаовить node.js](https://nodejs.org/) используется пакет npm
* [глобально установить gulp](https://gulpjs.com/) для работы команд gulp
* [глобально установить browser-sync](https://browsersync.io/) для работы виртуального сервера

использование
-----------------------------------

  &lt;div class="timer timer-js"&gt;&lt;/div&gt;
  &lt;div class="timer timer1-js"&gt;&lt;/div&gt;
  &lt;script src="путь_до_скрипта/timer.min.js"&gt;&lt;/script&gt;
  <script>
    window.onload = function () {


      var
        
        // блок в котором будет таймер
        myBlockTimer = document.querySelector(".timer-js"),
        
        // старт для обратного отсчета
        // часы
        hh = 111, // 99
        // минуты
        mm = 12,
        // секунды
        ss = 13;

      svgTimer(myBlockTimer, hh, mm, ss);

      // время по умолчанию 15 минут
      svgTimer(document.querySelector(".timer1-js"));

    };
  </script>
