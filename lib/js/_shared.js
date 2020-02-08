document.addEventListener("DOMContentLoaded", function(event) { 

    var bday =  new Date('1997-06-27');
    var loadtime = new Date();
    var ageYears = dateDiff(bday, loadtime)

    new Vue({ el: '#nav-area' })    
    new Vue({ el: '#footer-area' })  
    new Vue({
        el :'#about-area',
        data: {
            age: ageYears
    }
})
});


Vue.component('navbar-left', {
    props: ['post'],
    template: `
    <div class="sidenav">
    <a href="index.html" class="logo logo-name">
        <h2 class="logo-left centre-text">B
            <span class="hidden">
                <span class="name">radley</span>
            </span>
        </h2>
        <h2 class="logo-right centre-text">M
        <span class="hidden">
            <span class="name">artin</span>
        </span>
        </h2>
    </a>
    <a href="about.html" class="logo">
        <h2 class="logo-left centre-text">About
            <span class="hidden">
                <span class="name"><i class="small-left-pad fas fa-angle-double-right"></i></span>
            </span>
        </h2>
    </a>
    <a href="Services.html" class="logo">
        <h2 class="logo-left centre-text">Services
            <span class="hidden">
                <span class="name"><i class="small-left-pad fas fa-angle-double-right"></i></span>
            </span>
        </h2>
    </a>
    <a href="Contact.html"  class="logo">
        <h2 class="logo-left centre-text">Contact
            <span class="hidden">
                <span class="name"><i class="small-left-pad fas fa-angle-double-right"></i></span>
            </span>
        </h2>
    </a>
</div>
  `
  })
  Vue.component('nav-footer', {
    props: ['post'],
    template: `
    <div class="footer">
        <div class="line-item-phone">
        <p>
        <i class="fas fa-phone"></i> +44 7545 108078
        </p>
        </div>
        <div class="line-item-email">
        <p>
            <i class="far fa-envelope"></i><a href="mailto:bradley.martin@martek-it.co.uk" class="href-no-style"> bradley.martin@martek-it.co.uk</a>
        </p>
        </div>
        <div class="line-item-web">
        <p>
            <a href="www.martek-it.co.uk" class="href-no-style">www.martek-it.co.uk</a>
        </p>
        </div>
    </div>
    `
  })


  function dateDiff(dateold, datenew)
{
  var ynew = datenew.getFullYear();
  var mnew = datenew.getMonth();
  var dnew = datenew.getDate();
  var yold = dateold.getFullYear();
  var mold = dateold.getMonth();
  var dold = dateold.getDate();
  var diff = ynew - yold;
  if(mold > mnew) diff--;
  else
  {
    if(mold == mnew)
    {
      if(dold > dnew) diff--;
    }
  }
  return diff;
}