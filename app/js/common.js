


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

 
	
});

