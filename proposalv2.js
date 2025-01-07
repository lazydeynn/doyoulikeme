


const no = document.getElementById("btn2");
const yes = document.getElementById("btn1");
const overlay = document.getElementById("overlay");


//group 1 of btts

const btt1 = document.getElementById('btt1');
const btt2 = document.getElementById('btt2');
const btt3 = document.getElementById('btt3');
const btt4 = document.getElementById('btt4');
const btt5 = document.getElementById('btt5');
const btt6 = document.getElementById('btt6');
const btt7 = document.getElementById('btt7');
const btt8 = document.getElementById('btt8');
const btt9 = document.getElementById('btt9');
const btt10 = document.getElementById('btt10');
const btt11 = document.getElementById('btt11');
const btt12 = document.getElementById('btt12'); 

//second group of btts

const bbtt1 = document.getElementById('bbtt1');
const bbtt2 = document.getElementById('bbtt2');
const bbtt3 = document.getElementById('bbtt3');
const bbtt4 = document.getElementById('bbtt4');
const bbtt5 = document.getElementById('bbtt5');
const bbtt6 = document.getElementById('bbtt6');
const bbtt7 = document.getElementById('bbtt7');
const bbtt8 = document.getElementById('bbtt8');
const bbtt9 = document.getElementById('bbtt9');
const bbtt10 = document.getElementById('bbtt10');
const bbtt11 = document.getElementById('bbtt11');
const bbtt12 = document.getElementById('bbtt12'); 
const audio = document.getElementById("love-song");


//IMAGESSSSSS///////


const sadcat = document.getElementById('sadcat');
const crying = document.getElementById('crying');
const sadboi = document.getElementById('sadboi');
const sadman  = document.getElementById('sadman');
const hahahuhu = document.getElementById('hahahuhu');
const hang = document.getElementById('hang');
const sadsad = document.getElementById('sadsad');
const mainGif = document.getElementById("main-gif");


yes.addEventListener("click", () => {
		audio.play();
		overlay.style.display = "block";
		mainGif.src = "yes1.gif"; // Change the main GIF to a happy one

		

		

});
no.addEventListener("click", function (){
	mainGif.src = "sad.gif";
			btt12.style.opacity= "1";
			no.style.opacity= "0";
									
});

btt12.addEventListener("click", function (){
			btt12.style.opacity= "0";
			bbtt3.style.opacity= "1";
									
});

bbtt3.addEventListener("click", function (){
			btt1.style.opacity= "1";
			bbtt3.style.opacity= "0";
			
									
});

btt1.addEventListener("click", function (){
			btt1.style.opacity= "0";
			btt4.style.opacity= "1";
			
									
});

btt4.addEventListener("click", function (){
			btt2.style.opacity= "1";
			btt4.style.opacity= "0";
							
});

btt2.addEventListener("click", function (){
			btt2.style.opacity= "0";
			bbtt1.style.opacity= "1";
			
				
});

bbtt1.addEventListener("click", function (){
	btt3.style.opacity= "1";
			bbtt1.style.opacity= "0";
});

bbtt8.addEventListener("click", function (){
			bbtt8.style.opacity= "0";
			btt6.style.opacity= "1";
			
					
			
});

btt6.addEventListener("click", function (){
	btt6.style.opacity= "0";
			bbtt6.style.opacity= "0";
			btt4.style.opacity= "0";	 
		 btt3.style.opacity= "1";
							
});

btt3.addEventListener("click", function (){
			
			btt3.style.opacity= "0";
		 			
});
