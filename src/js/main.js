window.onload = function () {

  var 
    // блок в котором будет таймер
    myBlockTimer = document.querySelector(".timer"),
    // старт для обратного отсчета
    // два часа, пятндцать минут, тридцать секунд
    hh = 0,
    mm =  "01",
    ss = 4;

  svgTimer(myBlockTimer, hh, mm, ss);

};
