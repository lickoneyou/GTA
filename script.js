document.querySelector('.yes').addEventListener('click', function () {
    this.style.backgroundColor = 'lightgreen'
})

document.querySelector('.no').addEventListener('mousemove', function () {
    this.style.top = `${randomInt(400, -50)}px`
    this.style.left = `${randomInt(500, -500)}px`
    
    document.querySelector('.yes').style.backgroundColor = ''
})

function randomInt(max, min) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  