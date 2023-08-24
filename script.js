document.querySelector('.yes').addEventListener('click', function () {
    this.style.backgroundColor = 'lightgreen'
})

document.querySelector('.no').addEventListener('mousemove', function () {
    this.style.top = `${randomInt((window.innerHeight/2) -20, 0)}px`
    this.style.left = `${randomInt((window.innerWidth/2) - 40, -(window.innerWidth/2) + 40)}px`
    
    document.querySelector('.yes').style.backgroundColor = ''
})

function randomInt(max, min) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  