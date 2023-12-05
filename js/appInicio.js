$('button').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('is-expanded');
  })


  function classToggle() {
    var el = document.querySelector('.icon-cards__content');
    el.classList.toggle('step-animation');
  }
  
  document.querySelector('#toggle-animation').addEventListener('click', classToggle);