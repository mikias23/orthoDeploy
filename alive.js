$(document).ready(function(){






let eachQuote = document.querySelectorAll('.eachQuote')
let isss = 0;



let quoteInterval = setInterval(quoteIntervalStart, 1000)
function quoteIntervalStart(){

    eachQuote.forEach(quote => {
        quote.classList.remove('alive')
    })
    if(isss === eachQuote.length-1){
        isss = -1;
    }
    isss++;
    
    eachQuote[isss].classList.add('alive');
}

let centerQuote = document.querySelector('.centerQuote')
let j = 100;
let m = 0;
let k = eachQuote.length-1
$('#quotes .next').on('click', function(){

})
$('#quotes .prev').on('click', function(){



    })




        $('.each .content a').on('click', function(e){
            $target = $(e.target)
            const id = $target.attr('data-id')
            $.ajax({
                type:'GET',
                url:'/teaching/'+id,
                success: function(response){
                    window.location.href= '/teaching' 
                },
                error:  function(err){
                    console.log(err);
                }
            })
        })
const chosens = document.querySelectorAll('.chosens .group')
const nextBtn = document.querySelector('.chosens .next');
const prevBtn = document.querySelector('.chosens .prev');
let i = 0;

let slides = document.querySelectorAll('.slides div')
slides[0].style.background = 'orange';
nextBtn.addEventListener('click', function(){

    if(i===4){
        i=-1;
    }
    i++;
    chosens.forEach(chosen => {
        chosen.classList.remove('alive')
    })
    chosens[i].classList.add('alive')
  slides.forEach(slide => {
      slide.style.background = '#cccccc'
  })
   slides[i].style.background= 'orange'
})
prevBtn.addEventListener('click', function(){
    if(i===0){
        i=5;
    }
    i--;
    chosens.forEach(chosen => {
        chosen.classList.remove('alive')
    })
    chosens[i].classList.add('alive')
    chosens[i].classList.add('alive')
  slides.forEach(slide => {
      slide.style.background = '#cccccc'
  })
   slides[i].style.background= 'orange'

})

const nextQuote = document.querySelector('.nextQuote'),
prevQuote = document.querySelector('.prevQuote')
, eachQuotes = document.querySelectorAll('.eachQuote')
let iForNext=0;
nextQuote.addEventListener('click', function(){
    clearInterval(quoteInterval )
    iForNext++
    if(iForNext >= eachQuotes.length-1){
        iForNext = 0
    }
    eachQuotes.forEach(quote => {
        quote.classList.remove('alive')
    })
    eachQuotes[iForNext].classList.add('alive')

})
prevQuote.addEventListener('click', function(){
    clearInterval(quoteInterval )

    iForNext--;
    if(iForNext < 0){
        iForNext = eachQuotes.length-1
    }
    eachQuotes.forEach(quote => {
        quote.classList.remove('alive')
    })
    eachQuotes[iForNext].classList.add('alive')

})


})

