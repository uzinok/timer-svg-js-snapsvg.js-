function svgTimer(myBlockTimer, hh, mm, ss) {

  arrNumber = [];

  // 0
  arrNumber.push("M87.3 94.1c-.1-.4-.1-.7-.2-1-.4-2.1-2-3.9-4.7-3.9-3.7 0-5.3 3.4-4.7 6.2v1.4c1.8 12.9.9 26.1-2.7 38.7-3.1 11-8 23-17.4 30.2-9.3 7.1-21 6.7-30.1-.5-9-7.1-13.2-17.9-15.1-28.9-2.2-12.3-2.1-25.1-1.8-37.5C11 85.4 12.4 72.1 15 59c2.1-10.7 4.8-21.7 10.2-31.2C30 19.4 39.7 8.2 50.7 10.4 62.3 12.8 66 31 68.4 40.5c3.7 14.4 5.4 29.1 5.6 44 .1 6.4 10.1 6.4 10 0-.2-15.7-2-31.4-5.9-46.6-3.1-11.8-7-26.7-17.7-34C49-3.8 35 1.9 26 10.6c-9.2 8.8-14.4 21.2-17.7 33.3-7.9 29.1-10.3 62-6 91.9C4.2 149 9 162.5 19.4 171.5c9.5 8.3 22.5 12.3 34.7 7.7 14.9-5.6 23.4-19.6 28.6-33.9 5.6-16.7 6.9-34.1 4.6-51.2z");
  // 1
  arrNumber.push("M92.4 184.7c-13.2-4-27.9-.9-41.4-.9h-7c2.2-14 3.6-28.1 3.9-42.3.4-15.6-.1-31.2 1.7-46.7C53.1 65.4 61.8 36.9 66 7.7c.1-.3.3-.6.4-1 .5-1.2.4-2.3 0-3.2-.6-5-9.2-4.6-10 1.3V5c-2.1 4.6-6.6 8-10.4 11.2-4.4 3.6-9.1 6.9-14 9.9-9.4 5.9-19.4 11-29.5 15.8-5.8 2.8-.7 11.4 5 8.6 11.8-5.6 23.3-11.5 34-18.7 3.9-2.6 8.1-5.4 11.9-8.6C49 46.5 42.8 69.4 39.8 92.9c-1.9 15.2-1.6 30.4-1.9 45.7-.3 15.1-1.6 30.2-4.1 45.1-9.4 0-18.8.1-28.2 1.2-6.3.7-6.4 10.7 0 10 14.4-1.6 28.9-1.1 43.3-1.1 7.1 0 14.2-.2 21.3-.6 6.6-.4 13.1-.8 19.5 1.2 6.2 1.8 8.8-7.8 2.7-9.7z");
  // 2
  arrNumber.push("M89.1 185c-12.9-4.5-27-3.9-40.5-3.9-12.1 0-24.3.5-36.2 2.3-.7-9.4-1.6-18.8-1.5-28.2.2-11.3 5.7-20.6 13.5-28.5 7.4-7.5 16.1-13.6 24.2-20.3 7.9-6.7 15.6-13.8 22.2-21.8 13-15.8 22.7-35.4 22-56.3-.3-8.8-1.9-19-10.4-23.6C74 .2 62.3-.5 52.9.3c-21.8 1.9-41 14.3-52.1 33-3.3 5.5 5.4 10.6 8.6 5 9.1-15.3 24.8-26 42.6-28 4.4-.5 9-.5 13.4 0 4.2.5 10.7 1.2 13.9 4.3 3.1 3 3.3 8.7 3.5 12.7.2 5-.2 10-1.2 14.9-4 18.6-15.5 34.2-29 47.2C39.2 102.3 22.3 112 11 126.9c-6.1 8-9.7 17.2-10 27.3-.3 11.6 1.1 23.4 1.9 34.9.2 3.4 3 5.5 6.3 4.8 13-2.5 26.3-3 39.5-3 12.6 0 25.8-.7 37.8 3.5 6.1 2.4 8.7-7.2 2.6-9.4z");
  // 3
  arrNumber.push("M90.4 40.8c.4-7.7-.6-15.7-3.1-23C85.1 11 81.6 2.7 73.9.7c-6.8-1.8-15.3.2-21.9 2-6.9 1.9-13.6 4.8-19.7 8.5C17.8 19.9 6.7 33 .4 48.7c-2.4 6 7.3 8.6 9.6 2.7C15.9 36.9 27.3 25 41.1 17.7c6.9-3.6 14.5-6.1 22.2-7.1C68.1 10 72.2 9.4 75 14c1.9 3.3 3.2 7.1 4.1 10.8 3.9 15.7.2 33.3-10.2 45.8-7.4 8.9-17.2 15.1-27.5 20.4-5.2 1.8-10.3 4.4-14.6 7-5.6 3.3-.7 11.3 5 8.6 4.9-2.3 9.9-4.6 14.7-7.1 1.6-.4 3.3-.7 5.1-.7 7.1-.2 10.9 3.5 13.8 9.6 6.5 14.1 13 29.9 12 45.7-.5 7-2.6 14.4-7.8 19.3C65 177.7 59 180 53 181.5c-12 3-30.6 5.8-37.6-7.4-3-5.7-11.6-.6-8.6 5 6.7 12.8 21.7 15.8 35 14.4C54.5 192.2 69 189.1 78 179c9.9-11.2 10.7-27.5 8-41.5-1.6-8.2-4.5-16.1-7.7-23.8-2.6-6.3-4.8-13.6-9.7-18.5-2.2-2.2-4.5-3.7-7-4.7 3.7-2.6 7.3-5.5 10.5-8.7 11.1-11 17.5-25.5 18.3-41z");
  // 4
  arrNumber.push("M76 10c.1-6.4-9.9-6.4-10 0-.5 24-.8 48-.9 71.9-.8-.7-1.8-1.1-3.1-1.1-9.5 0-19-.1-28.5-.1-4.6 0-9.2 0-13.8-.1H9.8c.2-2.3.8-4.7 1.2-6.7.6-3.2 1.3-6.5 1.9-9.7 1.3-6.4 2.6-12.9 3.9-19.3C19.4 32 22 19.1 24.7 6.3c1.3-6.3-8.3-9-9.6-2.7-2.7 12.9-5.3 25.7-7.9 38.6-2.5 12.2-5.7 24.5-7 36.9-.5 4.4-.6 9.8 4.5 11.3 2.5.7 5.6.3 8.2.3h9.8c13.1 0 26.2.1 39.3.1 1.3 0 2.3-.4 3.1-1-.1 31.8.1 63.7.6 95.5.1 6.4 10.1 6.4 10 0-.9-58.4-.8-116.9.3-175.3z");
  // 5
  arrNumber.push("M92.8 10c6.4-.2 6.4-10.2 0-10C63.5.9 34.2 1.2 4.9.7 1.5.6-.5 3.9.1 7c5.2 25.5-.4 51.8 6.3 77.1.7 2.8 3.5 4 6.2 3.5 8.7-1.6 17.4-.8 25.9 1.2 7.2 1.7 15.3 3.7 21.6 7.9 6.2 4.1 9.6 12 13.1 18.3 3.9 7 7.4 14.3 9.1 22.2 1.5 7.1 1.1 15.1-2.4 21.6-3.3 6.2-9.4 10-15.7 12.8-15.1 6.7-31.9 9.4-48.3 9.1-6.4-.1-6.4 9.9 0 10 15.7.3 31.4-2.1 46.1-7.5 12.6-4.6 24.2-11.5 28.9-24.8 4.6-13.3 1.1-27.5-4.7-39.8-5.8-12.7-12.8-27.3-26.2-33.2-13.9-6.2-29.7-9.6-44.9-8.1-4.7-21.8-1.2-44.5-4.3-66.5 27.4.3 54.7.1 82-.8z");
  // 6
  arrNumber.push("M90 .6C45.5 22.4 11.2 65.8 2.3 114.8c-4 21.9-5.8 63 21.4 71.7 5.9 1.9 12 1 17.9-.6 7.1-1.9 14.3-3.6 21.3-5.8 11.9-3.8 22.1-10.9 27.5-22.5 5.8-12.6 4.7-27.8-3.3-39.2-8.4-12-22.1-17.2-35.3-21.8-6.1-2.1-8.7 7.5-2.7 9.6 10.1 3.5 21.2 7.2 28.2 15.7s8.8 20.5 4.4 30.6C77.1 163 67.6 168.3 57 171.3c-5.4 1.6-11 2.9-16.4 4.4-5.9 1.6-11.7 3-17.2-.3-10.1-6.1-12.3-20.5-13-31.3-.9-12.7.8-25.4 4.1-37.7 5.4-19.9 14.9-38.6 27.8-54.7C56.5 33.8 74.5 19.3 95 9.2c5.8-2.8.7-11.5-5-8.6z");
  // 7
  arrNumber.push("M91.2 3.8C76.7 5.4 62 5.7 47.5 4.6 33.3 3.5 19.1-.5 4.8.1c-6.4.2-6.4 10.2 0 10 14.3-.6 28.5 3.4 42.7 4.5 9.3.7 18.7.8 28 .4-4.6 5.1-8.2 11.2-10.2 17.9-4.2 14.3-2.4 30.6-2.3 45.3 0 3.9 0 7.9.1 11.8 0 1.5-.2 3.3-.1 4.9-.8.1-2 .6-2.6.7-6.6 1.3-13.6 1.1-20 3.4-13 4.7-17.7 17.6-21.2 29.9-4.8 16.9-6.9 34.6-6.5 52.2.2 6.4 10.2 6.4 10 0-.5-18.9 2.1-37.8 8.1-55.8 2.6-7.7 6-15 14.4-17.4 7.2-2.1 15.2-1.1 22.2-3.9 8-3.2 5.7-13 5.6-20 0-9.7-.2-19.4-.1-29.1 0-8.7.4-17.7 4.5-25.5C81 22.5 86.8 17 93.7 13.1c4-2.3 2.6-9.9-2.5-9.3z");
  // 8
  arrNumber.push("M59.1 95.6c-5.3-3.7-10.3 5-5 8.6 5.1 3.6 6.7 12.2 7.6 18 1.2 7 .9 14.4-.8 21.4-1.5 6.2-4.2 11.3-10.1 14.4-6.1 3.2-13.6 3.8-20.3 2.7-5.9-.9-11.5-3.2-14.3-8.7-3.3-6.5-2.2-14 .8-20.3 5.8-12.4 17.4-21.2 26.1-31.5 17-20.2 30.5-46.3 26.7-73.5-1.6-11.6-7.5-22.2-19.4-25.4C38.8-1.9 24.7 1 14.9 8 4.1 15.7-2.1 28.9.6 42.1 3.3 55 14.2 65 25.8 70.1c5.8 2.6 10.9-6.1 5-8.6-10.5-4.7-21.4-14-20.9-26.6C10.5 21.1 23.2 12 36 10.4c5.9-.7 13.1-.5 17.8 3.6 4.7 4.2 6.1 11.1 6.5 17.1.9 14.6-3.3 28.9-10.2 41.6-6.5 11.9-15.2 22.2-24.6 31.9-9 9.4-18.5 19.6-20.7 33-1.9 11.4 2.2 24 13 29.6 10.5 5.5 24.7 5.3 35.5.7 13.6-5.8 18.2-19.2 19.1-33.2.6-12.9-2-31.1-13.3-39.1z");
  // 9
  arrNumber.push("M66 2.2C45.6-5.5 25.1 8.2 17.4 27c-9.1 22.1-3.1 54.5 15.8 70 4.9 4 12.1-3 7.1-7.1-14.7-12-20-35.7-15.5-53.6C29 19.8 45.6 4.5 63.4 11.9c20.3 8.4 14.3 35.2 8.3 50.9-7.5 19.7-18.6 37.9-28.6 56.3-10.2 18.9-20.7 39.3-40.6 49.6-5.7 3-.7 11.6 5 8.6 20.9-10.8 32.6-31.7 43.4-51.6 12-22.1 25.7-44 33.2-68.2 6.3-20 4.6-46.8-18.1-55.3z");

  // время по умолчанию 0 часов 15минут 0 секунд
  hh == undefined && (hh = 0);
  mm == undefined && (mm = 15);
  ss == undefined && (ss = 0);

  // приводим время в нужный формат 00 00 00
  Number(hh) > 99 && (hh = 99);
  Number(hh) < 10 && (hh = "0" + Number(hh));
  Number(mm) < 10 && (mm = "0" + Number(mm));
  Number(ss) < 10 && (ss = "0" + Number(ss));

  // собираем время в одну строку
  var numberTimer = hh + "" + mm + "" + ss;

  // создаем массив чисел со временем
  numberTimer = numberTimer.split("");

  // передаем в переменные каждую цифру таймера
  var
    hour1 = numberTimer[0],
    hour2 = numberTimer[1],
    minute1 = numberTimer[2],
    minute2 = numberTimer[3],
    sec1 = numberTimer[4],
    sec2 = numberTimer[5];

  // выводим таймер
  var hour1SvgPath = drawNumber(hour1);
  var hour2SvgPath = drawNumber(hour2);
  drawSplit();
  var minute1SvgPath = drawNumber(minute1);
  var minute2SvgPath = drawNumber(minute2);
  drawSplit();
  var sec1SvgPath = drawNumber(sec1);
  var sec2SvgPath = drawNumber(sec2);


  // таймер
  // каждые 1000ms вторая переменная секунд уменьшается на один
  // проводится проверка каждой цивры
  // при необходимости вызывается функция обновления нужной цифры
  var myTimer = setInterval(function () {
    sec2--;
    
    if (sec2 == -1) {

      sec2 = 9;
      sec1--;

      if (sec1 == -1) {

        sec1 = 5;
        minute2--;

        if (minute2 == -1) {

          minute2 = 9;
          minute1--;

          if (minute1 == -1) {

            minute1 = 5;
            hour2--;

            if (hour2 == -1) {

              hour2 = 9;
              hour1--;

              if (hour1 == -1) {
                return clearInterval(myTimer);
              }
              update_number(hour1SvgPath, hour1)
            }
            update_number(hour2SvgPath, hour2)
          }
          update_number(minute1SvgPath, minute1)
        }
        update_number(minute2SvgPath, minute2)
      }
      update_number(sec1SvgPath, sec1)
    }
    update_number(sec2SvgPath, sec2)


  }, 1000)

  // анимация цифры
  function update_number(numberTimer, n) {
    numberTimer.animate({
      d: arrNumber[n]
    }, 300, mina.linear)
  }

  // создание разделителя циферблата
  function drawSplit() {
    var svgSplit = Snap(100, 200);
    svgSplit.attr({
      viewBox: "0 0 100 200"
    });
    svgSplit.appendTo(myBlockTimer)
    svgSplit.circle(50, 66, 15)
    svgSplit.circle(50, 132, 15)
  }


  // создание каждой цифры
  function drawNumber(n) {
    var svg = Snap(100, 200);
    svg.appendTo(myBlockTimer);
    svg.attr({
      viewBox: "0 0 100 200"
    });
    return svg.path(arrNumber[n]);
  }
}