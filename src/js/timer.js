function svgTimer(myBlockTimer, hh, mm, ss) {

  // console.log(myBlockTimer);

  if (Number(hh) > 99) {
    hh = 99;
  }

  if (Number(hh) < 10) {
    hh = "0" + Number(hh);
  }

  if (Number(mm) < 10) {
    mm = "0" + Number(mm);
  }

  if (Number(ss) < 10) {
    ss = "0" + Number(ss);
  }

  var numberTimer = hh + "" + mm + "" + ss;
  console.log(numberTimer);

  numberTimer = numberTimer.split("");

  console.log(numberTimer);
  var
    hour1 = numberTimer[0],
    hour2 = numberTimer[1],
    minute1 = numberTimer[2],
    minute2 = numberTimer[3],
    sec1 = numberTimer[4],
    sec2 = numberTimer[5];


  var myTimer = setInterval(() => {
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
                clearInterval(myTimer);
              }
              update_number(Snap.select("#hour1"), hour1)
            }
            update_number(Snap.select("#hour2"), hour2)
          }
          update_number(Snap.select("#minute1"), minute1)
        }
        update_number(Snap.select("#minute2"), minute2)
      }
      update_number(Snap.select("#sec1"), sec1)
    }

    update_number(Snap.select("#sec2"), sec2)

    
  }, 1000)

  // console.log(hour1 + "" + hour2 + ":" + minute1 + "" + minute2 + ":" + sec1 + "" + sec2);
  update_number(Snap.select("#hour1"), hour1)
  update_number(Snap.select("#hour2"), hour2)
  update_number(Snap.select("#minute1"), minute1)
  update_number(Snap.select("#minute2"), minute2)
  update_number(Snap.select("#sec1"), sec1)
  update_number(Snap.select("#sec2"), sec2)



  function update_number(numberTimer, n) {
    numberTimer.animate({
      d: Snap.select("#d_" + n)
    }, 300, mina.linear)
  }
}