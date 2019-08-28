window.onload = function () {

  var 
    // блок в котором будет таймер
    myBlockTimer = document.querySelector(".timer"),
    // старт для обратного отсчета
    // два часа, пятндцать минут, тридцать секунд
    hh = 11,
    mm =  "12",
    ss = 13;

  svgTimer(myBlockTimer, hh, mm, ss);

};
