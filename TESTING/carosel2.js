<script>
(function(){
//If you want to include more images, add the link name and URL of the image in the array list below.
	let images_list = [
		{"url":"https://html-generator.com/uploads/images/2022/06/01/14954QUWO7WV4K3.png","name":"14954QUWO7WV4K3.png","link":""},
		{"url":"https://html-generator.com/uploads/images/2022/06/01/15774DXWHRB4G7U.png","name":"15774DXWHRB4G7U.png","link":""},
		{"url":"https://html-generator.com/uploads/images/2022/06/01/16312QB6N2ZC551.png","name":"16312QB6N2ZC551.png","link":""}
	];

	let slider_id = document.querySelector("#watchslide");

	// append all images
	let dots_div = "";
	let images_div = "";
	for (let i = 0; i < images_list.length; i++) {
		// if no link without href="" tag
		let href = (images_list[i].link == "" ? "":' href="'+images_list[i].link+'"');
		images_div += '<a'+href+' class="hcg-slides animated"'+(i === 0 ? ' style="display:block"':'')+'>'+
						'<span class="hcg-slide-number">'+(i+1)+'/'+images_list.length+'</span>'+
						'<img src="'+images_list[i].url+'" alt="'+images_list[i].name+'">'+
						'<span class="hcg-slide-text">'+images_list[i].name+'</span>'+
					 '</a>';
		dots_div += '<span class="hcg-slide-dot'+(i === 0 ? ' dot-active':'')+'" data-id="'+i+'"></span>';
	}
	slider_id.querySelector(".hcg-slider-body").innerHTML = images_div;
	slider_id.querySelector(".hcg-slide-dot-control").innerHTML = dots_div;

	let slide_index = 0;

	let images = slider_id.querySelectorAll(".hcg-slides");
	let dots = slider_id.querySelectorAll(".hcg-slide-dot");
	let prev_button = slider_id.querySelector(".hcg-slide-prev");
	let next_button = slider_id.querySelector(".hcg-slide-next");

	function showSlides() {
		if (slide_index > images.length-1) {
			slide_index = 0;
		}
		if (slide_index < 0) {
			slide_index = images.length-1;
		}
		for (let i = 0; i < images.length; i++) {
			images[i].style.display = "none";
			dots[i].classList.remove("dot-active");
			if (i == slide_index) {
				images[i].style.display = "block";
				dots[i].classList.add("dot-active");
			}
		}
	}

	prev_button.addEventListener("click", function(event) {
		event.preventDefault();
		slide_index--;
		showSlides();
	}, false);

	next_button.addEventListener("click", function(event){
		event.preventDefault();
		slide_index++;
		showSlides();
	}, false);

	function dot_click(event) {
		slide_index = event.target.dataset.id;
		showSlides();
	}

	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener("click", dot_click, false);
	}
})();
</script>