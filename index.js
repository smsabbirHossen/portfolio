const menuToggle = document.querySelector('.toggler');
const navigation = document.querySelector('.navigation');
menuToggle.addEventListener('click', function(){
    navigation.classList.toggle('active-navigation')
})