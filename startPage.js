window.onload = function(){
    if(localStorage.getItem('continue') === null || localStorage.getItem('continue') === 'save' && localStorage.getItem('saved_data') === '[]'){
        document.querySelector('#continue').style.display = 'none'
    }
    else if(localStorage.getItem('continue') === 'save') {
        localStorage.setItem('continue', 'load')
    }
}

document.getElementById('continue').onclick = function () {
    location.href = 'gamePage.html'
}

document.getElementById('single').onclick = function () {
    localStorage.setItem('player', 'single')
    localStorage.setItem('continue', 'save')
    localStorage.setItem('saved_data', '[]')
    location.href = 'gamePage.html'
}

document.getElementById('double').onclick = function () {
    if(localStorage.getItem('player') !== null) {
        localStorage.removeItem('player')
    }
    localStorage.setItem('continue', 'save')
    localStorage.setItem('saved_data', '[]')
    location.href = 'gamePage.html'
}