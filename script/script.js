window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
function callback () {
    let redesSociais = document.querySelectorAll('.menu-footer a');
    if (window.innerWidth < 1000) {
        
  
    
        redesSociais.forEach(function (item) {
            item.classList.add('active');
        });
        redesSociais[0].innerHTML = '<img src="assets/icons-social/facebook.svg">'
    
        redesSociais[1].innerHTML = '<img src="assets/icons-social/instagram.svg">'
    
        redesSociais[2].innerHTML = '<img src="assets/icons-social/youtube.svg">'
    
        redesSociais[3].innerHTML = '<img src="assets/icons-social/twitter.svg">'
    }
    if (window.innerWidth >= 1000) {
        redesSociais.forEach(function (item) {
            item.classList.remove('active');
        });
        redesSociais[0].innerHTML = 'Facebook'
        redesSociais[1].innerHTML = 'Instagram'
        redesSociais[2].innerHTML = 'Youtube'
        redesSociais[3].innerHTML = 'Twitter'

    }
}

