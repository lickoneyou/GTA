document.querySelector('.yes').addEventListener('click', function () {
    this.style.backgroundColor = 'lightgreen'
})

document.querySelector('.no').addEventListener('mousemove', function () {
    console.log(window.innerWidth/2);
    console.log(-(window.innerWidth/2));
    this.style.top = `${randomInt((window.innerHeight/2) -20, 0)}px`
    this.style.left = `${randomInt((window.innerWidth/2) - 40, -(window.innerWidth/2) + 40)}px`
    
    document.querySelector('.yes').style.backgroundColor = ''
})

function randomInt(max, min) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  