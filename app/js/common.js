


// preload
	$(window).load(function() {

		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("slow");

	});

// меню
	jQuery(function($){ 
			$("#toggle").click(function(event) {
			event.preventDefault();
			$(this).toggleClass("on");
			$("#menu").slideToggle();
		});
	});
 

$(document).ready(function() {
		

	//На мониторах выше HD фон
	if ($(window).width() > 1920) {  
		$(".cta, .header-bg").css( "background-size" , "100%");
	}
	 
 	// плавный линк
	$("#thisLink a").on("click", function (event) {  
		event.preventDefault(); 
		var id  = $(this).attr('href'), 
			top = $(id).offset().top; 
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$("#menu").on("click","a", function (event) { 
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 75; 
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
 

	

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#formBtn").submit(function() {
		$.ajax({
			type: "POST",
			url: "/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$("#formBtn").hide();
			$("#remodal-comlpeted").addClass("remodal-comlpeted").text("Сообщение отправлено!");
			setTimeout(function() {				
				$("#formBtn").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// ui slider
	$(function() {
	$( "#slider-range" ).slider({
	  range: true,
	  min: 0,
	  max: 20000,
	  values: [ 0, 20000 ],
	  animate:true,
	  step:5,
	  slide: function( event, ui ) {
	    $( "#amount-min" ).val( "От : " + ui.values[ 0 ] + "p");
	    $( "#amount-max" ).val( "До : " + ui.values[ 1 ] + "p");
	  }
	});

	$( "#amount-min" ).val("От : " + $( "#slider-range" ).slider( "values", 0 ) + "p");
	$( "#amount-max" ).val( "До : " + $( "#slider-range" ).slider( "values", 1 ) + "p");
	});	 
	
});


ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [58.53809511294036,31.266720431606917],
            zoom: 16
        }),

        // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [58.538008492389196,31.26413005747864]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'БЦ Волна',
                balloonContent: '4 этаж, офис 213'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'twirl#redStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        });

    // Добавляем все метки на карту.
    myMap.geoObjects 
        .add(myGeoObject);
}
