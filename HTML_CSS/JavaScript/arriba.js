function botonup(){
  window.addEventListener('scroll', () =>{
    var scroll = document.documentElement.scrollTop;
    console.log(scroll);
      var botonup = document.getElementsById('botonup');

      if(scroll > 300) {
        botonup.style.right = 20 + "px";
      }
  })
}

botonup();