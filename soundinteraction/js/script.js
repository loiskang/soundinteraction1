console.log('in js');

var mediaMap = { 'a':'media/other.mp3', 'b':'media/object.mp3', 'c':'media/water.mp3','d':'media/water1.mp3', 'e':'media/water2.mp3',
 'f':'media/water3.mp3', 'g':'media/object1.mp3', 'h': 'media/object2.mp3','i':'media/mechanical.mp3', 'j':'media/mechanical1.mp3',
 'k':'media/mechanical2.mp3','l':'media/mechanical3.mp3', 'm': 'media/mechanical4.mp3', 'n': 'media/object3.mp3','o':'media/mechanical5.mp3', 'p':'media/mechanical6.mp3',
 'q':'media/other1.mp3','r':'media/water4.mp3','s':'media/other2.mp3','t':'media/object4.mp3', 'u': 'media/mechanical7.mp3','v':'media/water5.mp3',
 'w':'media/other3.mp3','x':'media/other4.mp3','y':'media/object5.mp3','z':'media/other5.mp3'};

var keyMap   = {  13:'enter', 97:'a',98:'b',99:'c',100:'d',101:'e',102:'f', 103:'g', 
104:'h',105:'i',106:'j',107:'k', 108:'l', 109:'m',110:'n',111:'o', 112:'p', 113:'q',
114:'r',115:'s', 116:'t', 117:'u', 118:'v',119:'w', 120:'x',121:'y',122:'z',};


$(document).keypress(function(key){
	var keyNum = key.keyCode;
	console.log(keyNum + '  ' + keyMap[keyNum]);
	playSound(keyNum);
});

function playSound (key){
	//alert('in playsound '+key);
	var letter = keyMap[key];
	var link = mediaMap[letter]
	var audio = new Audio(link);
	audio.play()
}



$(document).ready(function(){
	$('div').on(
	    "webkitAnimationEnd oanimationend msAnimationEnd animationend",
	    function() {
	        $(this).removeClass("active");
	    }
	);
	$('div').on(
	    "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd",
	    function() {
	        $(this).removeClass("active");
	    }
	);
	   

});

$(document).on('keypress',function(a){
	if(a.which==97){
		$('#box').addClass('active');
	}
 	if(a.which==98){
		$('.B').addClass('active');
 	}
	if(a.which==120){
		$('.X').addClass('active');
 	}
 	if(a.which==99){
		$('.C').addClass('active');
 	}
 	if(a.which==100){
		$('.D').addClass('active');
 	}
 	if(a.which==101){
		$('.E').addClass('active');
 	}
 	if(a.which==102){
		$('.F').addClass('active');
 	}
 	if(a.which==103){
		$('.G').addClass('active');
 	}
 	if(a.which==104){
		$('.H').addClass('active');
 	}
 	if(a.which==105){
		$('.I').addClass('active');
 	}
 	if(a.which==106){
		$('.J').addClass('active');
 	}
 	if(a.which==107){
		$('.K').addClass('active');
 	}
 	if(a.which==108){
		$('.L').addClass('active');
 	}
 	if(a.which==109){
		$('.M').addClass('active');
 	}
 	if(a.which==110){
		$('.N').addClass('active');
 	}
 	if(a.which==111){
		$('#box1').addClass('active');
 	}
 	if(a.which==112){
		$('.P').addClass('active');
 	}
 	if(a.which==113){
		$('.Q').addClass('active');
 	}
 	if(a.which==114){
		$('.R').addClass('active');
 	}
 	if(a.which==115){
		$('.S').addClass('active');
 	}
 	if(a.which==116){
		$('.T').addClass('active');
 	}
 	 if(a.which==117){
		$('.U').addClass('active');
 	}
 	if(a.which==118){
		$('.V').addClass('active');
 	}
 	if(a.which==119){
		$('.W').addClass('active');
 	}
 	if(a.which==120){
		$('.X').addClass('active');
 	}
 	if(a.which==121){
		$('.Y').addClass('active');
 	}

 	if(a.which==122){
		$('.Z').addClass('active');
 	}

 		

});