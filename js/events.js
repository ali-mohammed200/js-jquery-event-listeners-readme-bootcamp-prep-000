function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  })
}
function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}
function pressIt(){
  $('input').on('keydown', function(eve){
    if(eve.key === 'g'){
      alert(`You Pressed G!`);
    }
  });
}
$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
});

/*
+ Define a function `pressIt` that does not accept a parameter. The function
should bind a `keydown` event to the input field of the form that alerts a user
when they have pressed the `G` key.

+ Define a function `submitIt` that does not accept a parameter. The function
should bind a `submit` event to the form that alerts `"Your form is going to be
submitted now."`.
*/
