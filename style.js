let heading = document.getElementById('heading');
let degree = 0;
let paused = false;

function rotateHeading(){
  if (paused) return;

  degree = degree + 3;

  if (degree >= 360) {
    degree = 0;
    paused = true;

    setTimeout(() => {
      paused = false;
    }, 1000);
  }

  if(90 < degree && degree <= 270){
    heading.setAttribute('class', 'back');
  }else{
    heading.setAttribute('class', 'face');
  }

  heading.style.transform = 'rotateX(' + degree + 'deg)';
}

setInterval(rotateHeading, 50);
