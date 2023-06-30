// Sticky menu background
window.addEventListener('scroll' , function(){
  if(this.window.scrollY > 150){
    this.document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    this.document.querySelector('#navbar').style.opacity = 1;
  }
});


//Smooth scrolling JQuery
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== ''){
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }

});