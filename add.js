var co = document.querySelector('.yes');
var hpny = document.querySelector('.hpny');
var c1 = document.querySelector('.chuyen1');
var clickno = document.querySelector('.no');
var chat = document.querySelector('.chat');
var trang2 = document.querySelector('.time-countup');
var clicktext = document.querySelector('.text-trang2');
var lanchuot = document.querySelector('.scroll');
var trang2hien = document.querySelector('.trang-2');
var mymusic = document.getElementById('mymusic');
var myaudio = document.getElementById('myaudio');
var slide = document.getElementById('slider');
var text = document.querySelector('.slider-container');
var clickheart = document.querySelector('.text-heart');
var click = document.querySelector('.button-heart');
var khung1 = document.getElementById('pic1')
var khung2 = document.getElementById('pic2')
var khung3 = document.getElementById('pic3')
var khung4 = document.getElementById('pic4')
var khung5 = document.getElementById('pic5')
var khung6 = document.getElementById('pic6')
var khung7 = document.getElementById('pic7')
var khung8 = document.getElementById('pic8')
var khung9 = document.getElementById('pic9')
var khung10 = document.getElementById('pic10');
var khungimg = document.querySelectorAll('.khung-img img');





    co.onmouseover = function () {
       
            // co.classList.toggle("chuyen1");
            co.classList.add("chuyen1");
            
                
            co.onmouseover = function () {
                co.classList.add("chuyen2");
                
                co.onmouseover = function () {
                    co.classList.add("chuyen3");
                    
                    co.onmouseover = function () {
                        co.classList.add("chuyen4");
                        co.onmouseover = function () {
                            co.classList.add("chuyen5");
                            
                            co.onmouseover = function () {
                                co.classList.add("chuyen6");
                                co.onmouseover = function () {
                                    
                                    co.classList.toggle("chuyen7");
                                    co.classList.add("bienmat");
                                   
                                    
                                }
                                
                
                                
                            }
                            
                        }
        
                        
                    }
                    
                }
                
            }
          
            
    }
    
    // rain-heart       
    var rain = document.getElementById("rain")

    function createHearts () {
      const heart  = document.createElement("div");
       heart.classList.add("heart","fa","fa-heart")
      heart.style.left = Math.floor(Math.random()*100)+"vw"
      heart.style.animationDuration = Math.floor(Math.random()*2)+2+"s"
      hpny.appendChild(heart)
      
    }
     setInterval(createHearts,100);
    
       var heart = document.getElementsByClassName("heart")
     setInterval(()=>{
       for (let i = 0; i < heart.length; i++) {
         if (i > 30) {
          heart[0].remove() 
         }
       
       }
     },50) 

// Chọn   

clickno.addEventListener('click',function(){
    mymusic.play();
    chat.classList.add('chatdichchuyen');
    trang2hien.classList.add("trang2hienlen");
    chat.innerHTML="Oke ! T biết m không yêu t mà :(";
    
    setTimeout(function(){
        
        chat.classList.remove('chatdichchuyen');
        setTimeout(function(){
            document.body.removeChild(hpny)
        },1000)
          
    },3000);
    
      text.classList.add("hienchu");  


    
   

        /*trang 2*/
    setTimeout(function(){
        trang2.classList.add("trang2dichchuyen");
    },17000) 
    // },17000)  ; 
    setTimeout(function(){
        clickheart.classList.add("hienclickheart");
        
    },22000)

});
/*click trang2 */
click.addEventListener('click',function(){
        mymusic.pause();
        /*myaudio.play();*/
        setTimeout(function(){
            khung1.classList.add("khunganhhienlen")
        },2000)
        
        setTimeout(function(){
            khung2.classList.add("khunganhhienlen")
        },3000)
        setTimeout(function(){
            khung3.classList.add("khunganhhienlen")
        },4000)
        setTimeout(function(){
            khung4.classList.add("khunganhhienlen")
        },5000)
        setTimeout(function(){
            khung5.classList.add("khunganhhienlen")
        },6000)
        setTimeout(function(){
            khung6.classList.add("khunganhhienlen")
        },7000)
        setTimeout(function(){
            khung7.classList.add("khunganhhienlen")
        },8000)
        setTimeout(function(){
            khung8.classList.add("khunganhhienlen")
        },9000)
        setTimeout(function(){
            khung9.classList.add("khunganhhienlen")
        },1000)
        setTimeout(function(){
            khung10.classList.add("khunganhhienlen")
        },11000)
        
            for (let q = 0; q < khungimg.length; q++) {
                setTimeout(function(){
                    khungimg[q].classList.add("anhhienlen")
               },12000)
            }
            setTimeout(function(){
                mymusic.play();
                myaudio.pause();
                lanchuot.classList.add('cuonxuong');
            },13000)
        
        
})

//  countup-day       
function updateTimer() {
	// yyyy-MM-dd HH:mm:ss
  past  = Date.parse("2019-11-18 00:00:00");
  now     = new Date();
  diff    = now - past;

  years  = Math.floor( diff / (1000*60*60*24*30*12) );
  months = Math.floor( diff / (1000*60*60*24*30) );
  days   = Math.floor( diff / (1000*60*60*24) );
  hours  = Math.floor( diff / (1000*60*60) );
  mins   = Math.floor( diff / (1000*60) );
  secs   = Math.floor( diff / 1000 );

  y = years;
  M = months - years  * 12;
  d = days   - months * 30;
  h = hours  - days   * 24;
  m = mins   - hours  * 60;
  s = secs   - mins   * 60;
  document.getElementById("timer")
    .innerHTML =
      '<div><span>Hành nhau từ: 18-11-2019</span></div><br>'+
      '<div>' + y  + '<span>Năm</span></div>' +
      '<div>' + M + '<span>Tháng</span></div>' +
      '<div>' + d + '<span>Ngày</span></div>' +
      '<div>' + h + '<span>Giờ</span></div>' +
      '<div>' + m + '<span>Phút</span></div>' +
      '<div>' + s + '<span>Giây</span></div>' ;
}
setInterval('updateTimer()', 1000 );
        

