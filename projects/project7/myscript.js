// JavaScript Document
PrintButton1 = new Image
PrintButton2 = new Image
logo1 = new Image
logo2 = new Image
if (document.images) {
	PrintButton1.src = "images/Button.jpg"
	PrintButton2.src = "images/Button2.jpg"
	logo1.src = "images/logo-new.jpg"
	logo2.src = "images/logo-alternate.jpg"
}


		var imgArray = new Array(
			'CardinalLg.jpg',
			'HawkLg.jpg',
			'PigeonLg.jpg',
			'HeronLg.jpg'
		);

		var titleArray = new Array(
			'Cardinal In The Winter',
			'Hawk Takes Flight',
			'Pigeon In The Park',
			'Heron In The Water'	
		);
			
		var imgPath = "images/fullsize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}