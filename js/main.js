// section navigation
addEventListener( "scroll", function(){
    const header = document.querySelector('header');
    header.classList.toggle( 'sticky', window.scrollY > 0);
});



// icon menu
function menuToggle(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}