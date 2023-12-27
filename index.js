const progressBar = document.querySelector('.progress_bar');
const counter = document.getElementById('counter');

progressBar.addEventListener('animationiteration', toCountIteration);

function toCountIteration() {
    const num = +counter.lastChild.innerHTML;
    counter.lastChild.innerHTML = num + 1;
}