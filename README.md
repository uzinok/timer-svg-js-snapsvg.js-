Таймер js/svg/snapsvg.js
=====================

Подготовил: [Александр Зиновьев](http://uzinok.ru/)
-----------------------------------

Команды
-----------------------------------

* gulp - сборка проекта и запуск сервера
* gulp build - сборка проекта
* gulp clean - удаление готовой сборки
* gulp opti_img - оптимизация графики (.jpg, .png, .svg, .webp)

особенности
-----------------------------------

* препроцессор стилей less
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
  
  
  <script><br>
  <br>
    window.onload = function () {<br>
<br>

      var<br>
        <br>
        // блок в котором будет таймер<br>
        myBlockTimer = document.querySelector(".timer-js"),<br>
        <br>
        // старт для обратного отсчета<br>
        // часы<br>
        hh = 111, // 99<br>
        // минуты<br>
        mm = 12,<br>
        // секунды<br>
        ss = 13;<br>
<br>
      svgTimer(myBlockTimer, hh, mm, ss);<br>
<br>
      // время по умолчанию 15 минут<br>
      svgTimer(document.querySelector(".timer1-js"));<br>
<br>
    };<br>
    <br>
  </script>
  
  [демо](http://timer.uzinok.ru/)
-----------------------------------
