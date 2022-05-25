var button = document.getElementsByClassName('but');
tabContent = document.getElementsByClassName('tab-content');
button[0].classList.add('active');
tabContent[0].style.display = 'block';


function tabs(e, tabValue) {
    for (var i = 0; i < button.length; i++) {
        tabContent[i].style.display = 'none';
        button[i].classList.remove('active');
    }
    document.getElementById(tabValue).style.display = 'block';
    e.currentTarget.classList.add('active');
}
