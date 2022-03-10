import $ from 'jquery'

$(document).ready(function () {

    var mar_top = 0;
    
    var mar_left = 0;
   
    
document.addEventListener('keydown', function() {
    // $('img').removeClass('up');
    // $('img').removeClass('left');
    // $('img').removeClass('right');
    if(event.code == "KeyS")
    {
        if(mar_top<420)
        {
        mar_top+=10;
    $('img').attr('class','down');
    $('img').css('margin-top',mar_top);
        }
    }
    if(event.code == "KeyW")
    {
       
        if(mar_top>0)
        {
        mar_top-=10;
        $('img').attr('class','up');
        $('img').css('margin-top',mar_top);
        }
        
    }
     if(event.code == "KeyA")
     {
        
        if(mar_left>0)
        {
        mar_left-=10;
        $('img').attr('class','left');
        $('img').css('margin-left',mar_left);
        }
     }
     if(event.code == "KeyD")
     {
         if(mar_left<420)
         {
        mar_left+=10;
       
        $('img').attr('class','right');
        $('img').css('margin-left',mar_left);
         }
     }
   

    });
   
//     document.addEventListener('keyup', function() {
//         // $('img').removeClass('down');
//         // $('img').removeClass('left');
//         // $('img').removeClass('right');
//         if(event.code == "ArrowDown")
//         $('img').addClass('up');
//         console.log(2);
    
//    });
//         document.addEventListener('keyleft', function() {
//             $('img').removeClass('up');
//             $('img').removeClass('right');
//             $('img').removeClass('down');
//             $('img').addClass('left');
//             console.log(3);
        
//     });

//     document.addEventListener('keyright', function() {
//         $('img').removeClass('up');
//         $('img').removeClass('left');
//         $('img').removeClass('down');
//         $('img').addClass('right');
//         console.log(4);
    
// });
})


