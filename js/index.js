$(document).ready(function(){



	var valmin1 = $('.p1').attr('aria-valuemin');
	var valmax1 = $('.p1').attr('aria-valuemax');
	var valnow1 = $('.p1');
	var percent1 = $('.p1 .percent');

	var valmin2 = $('.p2').attr('aria-valuemin');
	var valmax2 = $('.p2').attr('aria-valuemax');
	var valnow2 = $('.p2');
	var percent2 = $('.p2 .percent');


	var valmin3 = $('.p3').attr('aria-valuemin');
	var valmax3 = $('.p3').attr('aria-valuemax');
	var valnow3 = $('.p3');
	var percent3 = $('.p3 .percent');
	
	var valmin4 = $('.p4').attr('aria-valuemin');
	var valmax4 = $('.p4').attr('aria-valuemax');
	var valnow4 = $('.p4');
	var percent4 = $('.p4 .percent');

	var valmin5 = $('.p5').attr('aria-valuemin');
	var valmax5 = $('.p5').attr('aria-valuemax');
	var valnow5 = $('.p5');
	var percent5 = $('.p5 .percent');

	var valmin6 = $('.p6').attr('aria-valuemin');
	var valmax6 = $('.p6').attr('aria-valuemax');
	var valnow6 = $('.p6');
	var percent6 = $('.p6 .percent');

	var valmin7 = $('.p7').attr('aria-valuemin');
	var valmax7 = $('.p7').attr('aria-valuemax');
	var valnow7 = $('.p7');
	var percent7 = $('.p7 .percent');

	var valmin8 = $('.p8').attr('aria-valuemin');
	var valmax8 = $('.p8').attr('aria-valuemax');
	var valnow8 = $('.p8');
	var percent8 = $('.p8 .percent');

	var valmin9 = $('.p9').attr('aria-valuemin');
	var valmax9 = $('.p9').attr('aria-valuemax');
	var valnow9 = $('.p9');
	var percent9 = $('.p9 .percent');

	var valmin10 = $('.p10').attr('aria-valuemin');
	var valmax10 = $('.p10').attr('aria-valuemax');
	var valnow10 = $('.p10');
	var percent10 = $('.p10 .percent');

	var valmin11 = $('.p11').attr('aria-valuemin');
	var valmax11 = $('.p11').attr('aria-valuemax');
	var valnow11 = $('.p11');
	var percent11 = $('.p11 .percent');

	var valmin12 = $('.p12').attr('aria-valuemin');
	var valmax12 = $('.p12').attr('aria-valuemax');
	var valnow12 = $('.p12');
	var percent12 = $('.p12 .percent');

	var valmin13 = $('.p13').attr('aria-valuemin');
	var valmax13 = $('.p13').attr('aria-valuemax');
	var valnow13 = $('.p13');
	var percent13 = $('.p13 .percent');

	var valmin14 = $('.p14').attr('aria-valuemin');
	var valmax14 = $('.p14').attr('aria-valuemax');
	var valnow14 = $('.p14');
	var percent14 = $('.p14 .percent');

	var valmin15 = $('.p15').attr('aria-valuemin');
	var valmax15 = $('.p15').attr('aria-valuemax');
	var valnow15 = $('.p15');
	var percent15 = $('.p15 .percent');

	var valmin16 = $('.p16').attr('aria-valuemin');
	var valmax16 = $('.p16').attr('aria-valuemax');
	var valnow16 = $('.p16');
	var percent16 = $('.p16 .percent');

	var valmin17 = $('.p17').attr('aria-valuemin');
	var valmax17 = $('.p17').attr('aria-valuemax');
	var valnow17 = $('.p17');
	var percent17 = $('.p17 .percent');

	var valmin18 = $('.p18').attr('aria-valuemin');
	var valmax18 = $('.p18').attr('aria-valuemax');
	var valnow18 = $('.p18');
	var percent18 = $('.p18 .percent');

	var valmin19 = $('.p19').attr('aria-valuemin');
	var valmax19 = $('.p19').attr('aria-valuemax');
	var valnow19 = $('.p19');
	var percent19 = $('.p19 .percent');

	var valmin20 = $('.p20').attr('aria-valuemin');
	var valmax20 = $('.p20').attr('aria-valuemax');
	var valnow20 = $('.p20');
	var percent20 = $('.p20 .percent');

	var valmin21 = $('.p21').attr('aria-valuemin');
	var valmax21 = $('.p21').attr('aria-valuemax');
	var valnow21 = $('.p21');
	var percent21 = $('.p21 .percent');

	var valmin22 = $('.p22').attr('aria-valuemin');
	var valmax22 = $('.p22').attr('aria-valuemax');
	var valnow22 = $('.p22');
	var percent22 = $('.p22 .percent');


	function progressValue(valmin,valmax,valnow,percent){
		while(valmin<=valmax){

			percent.text(valmin+'%');
			//valmin= valmin - 	0.9
			valnow.width(valmin+'%');
			valmin++;
		}
	}



	$('.scrollTo').on('click', function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 1500; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
	});

	inView('.p5').on('enter',function(){
		
		

		progressValue(valmin1,valmax1,valnow1,percent1);
		progressValue(valmin2,valmax2,valnow2,percent2);
		progressValue(valmin3,valmax3,valnow3,percent3);
		progressValue(valmin4,valmax4,valnow4,percent4);
		progressValue(valmin5,valmax5,valnow5,percent5);
		progressValue(valmin6,valmax6,valnow6,percent6);
		progressValue(valmin7,valmax7,valnow7,percent7);
		progressValue(valmin8,valmax8,valnow8,percent8);
		progressValue(valmin9,valmax9,valnow9,percent9);
		progressValue(valmin10,valmax10,valnow10,percent10);
		progressValue(valmin11,valmax11,valnow11,percent11);
		progressValue(valmin12,valmax12,valnow12,percent12);
		progressValue(valmin13,valmax13,valnow13,percent13);
		progressValue(valmin14,valmax14,valnow14,percent14);
		progressValue(valmin15,valmax15,valnow15,percent15);
		progressValue(valmin16,valmax16,valnow16,percent16);
		progressValue(valmin17,valmax17,valnow17,percent17);
		progressValue(valmin18,valmax18,valnow18,percent18);
		progressValue(valmin19,valmax19,valnow19,percent19);
		progressValue(valmin20,valmax20,valnow20,percent20);
		progressValue(valmin21,valmax21,valnow21,percent21);
		progressValue(valmin22,valmax22,valnow22,percent22);
	});
});