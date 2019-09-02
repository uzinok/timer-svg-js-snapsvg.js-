window.onload = function () {

  var 
    // блок в котором будет таймер
    myBlockTimer = document.querySelector(".timer-js"),
    // старт для обратного отсчета
    // два часа, пятндцать минут, тридцать секунд
    hh = 111,
    mm =  "12",
    ss = 13;

  svgTimer(myBlockTimer, hh, mm, ss);

  var 
  // блок в котором будет таймер
  myBlockTimer1 = document.querySelector(".timer1-js"),
  // старт для обратного отсчета
  // два часа, пятндцать минут, тридцать секунд
  hh = 01,
  mm =  "10",
  ss = 0;

svgTimer(myBlockTimer1);

svgTimer(document.querySelector(".timer2-js"), 0, 0, 3);
};
