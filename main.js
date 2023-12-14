document.getElementById('currentYear').textContent = new Date().getFullYear();

function toggleMode() {
    const body = document.body;
    body.classList.toggle('night-mode');
    
    const links = document.querySelectorAll('a');
    links.forEach(link => link.classList.toggle('night-mode'));

    if (body.classList.contains('night-mode')) {
        toggleImage.src = "./assests/sun icon.png"; 
    } 
    
    else {
        toggleImage.src = "./assests/moon icon.png"; 
    }

}

