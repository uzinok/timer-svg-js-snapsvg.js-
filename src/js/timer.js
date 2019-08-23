function svgTimer(myBlockTimer, hh, mm, ss) {

  // console.log(myBlockTimer);
  
  if (Number(hh) > 99) {
    hh = 99;
  }
  
  if(Number(hh) < 10) {
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
}
