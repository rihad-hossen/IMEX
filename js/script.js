$('.slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed:2500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


AOS.init();

$('.brand_slider').slick({
    dots: false,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:2500,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });


  $('.counter').counterUp({
    delay: 10,
    time: 3000
});



$('.s_slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  autoplay: true,
  autoplaySpeed:2500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



$('.team_slider').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '0',
  autoplay: true,
  autoplaySpeed:2500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});



let btn = document.getElementById('btn')
let btn1 = document.getElementById('btn1')

let snumber = document.getElementById('snumber')
let unumber = document.getElementById('unumber')
let pnumber = document.getElementById('pnumber')

btn1.addEventListener('click',function(){
  snumber.innerText = '15'
  unumber.innerText = '99'
  pnumber.innerText = '55'
})


btn.addEventListener('click',function(){
  snumber.innerText = '155'
  unumber.innerText = '999'
  pnumber.innerText = '555'
})


window.addEventListener('scroll',function(){
  let navbar = document.getElementById('navBar')
  navbar.classList.toggle('sticky', window.scrollY > 10)
})

// window.addEventListener('scroll',function(){
//   let upper = document.getElementById('upper')
//   upper.style.display = "block"
//   upper.classList.toggle('up', window.scrollY > 10)
// })

let a1 = document.getElementById('a1')
a1.addEventListener('click', function(){
  a1.classList.add('active')
  a2.classList.remove('active')
  a3.classList.remove('active')
  a4.classList.remove('active')
  a5.classList.remove('active')
  a6.classList.remove('active')
  a7.classList.remove('active')
  a8.classList.remove('active')
})
let a2 = document.getElementById('a2')
a2.addEventListener('click', function(){
  a2.classList.add('active')
  a1.classList.remove('active')
  a3.classList.remove('active')
  a4.classList.remove('active')
  a5.classList.remove('active')
  a6.classList.remove('active')
  a7.classList.remove('active')
  a8.classList.remove('active')
})
let a3 = document.getElementById('a3')
a3.addEventListener('click', function(){
  a3.classList.add('active')
  a1.classList.remove('active')
  a2.classList.remove('active')
  a4.classList.remove('active')
  a5.classList.remove('active')
  a6.classList.remove('active')
  a7.classList.remove('active')
  a8.classList.remove('active')
})
let a4 = document.getElementById('a4')
a4.addEventListener('click', function(){
  a4.classList.add('active')
  a1.classList.remove('active')
  a2.classList.remove('active')
  a3.classList.remove('active')
  a5.classList.remove('active')
  a6.classList.remove('active')
  a7.classList.remove('active')
  a8.classList.remove('active')
})
let a5 = document.getElementById('a5')
a5.addEventListener('click', function(){
  a5.classList.add('active')
  a1.classList.remove('active')
  a2.classList.remove('active')
  a3.classList.remove('active')
  a4.classList.remove('active')
  a6.classList.remove('active')
  a7.classList.remove('active')
  a8.classList.remove('active')
})
let a6 = document.getElementById('a6')
a6.addEventListener('click', function(){
  a6.classList.add('active')
  a1.classList.remove('active')
  a2.classList.remove('active')
  a3.classList.remove('active')
  a4.classList.remove('active')
  a5.classList.remove('active')
  a7.classList.remove('active')
  a8.classList.remove('active')
})
let a7 = document.getElementById('a7')
a7.addEventListener('click', function(){
  a7.classList.add('active')
  a1.classList.remove('active')
  a2.classList.remove('active')
  a3.classList.remove('active')
  a4.classList.remove('active')
  a5.classList.remove('active')
  a6.classList.remove('active')
  a8.classList.remove('active')
})
let a8 = document.getElementById('a8')
a8.addEventListener('click', function(){
  a8.classList.add('active')
  a1.classList.remove('active')
  a2.classList.remove('active')
  a3.classList.remove('active')
  a4.classList.remove('active')
  a5.classList.remove('active')
  a6.classList.remove('active')
  a7.classList.remove('active')
})

var typed = new Typed('#typed', {
  strings: ["your customer."],
  typeSpeed: 120,
  loop: true,
  backSpeed: 20,
});





















