window.addEventListener("load", function(){
	var nodes = document.querySelectorAll(".dropout > img");
	for(var i=0; i<nodes.length; i++){
		nodes[i].style.zIndex = i;

		nodes[i].addEventListener("click",function(){
			this.classList.add("closing");
		});

		nodes[i].addEventListener("animationend",function(){
			var children = this.parentNode.children;
			for(var n=0; n<children.length; n++){
				var index = parseInt(children[n].style.zIndex)+1;
				children[n].style.zIndex = index;
			}

			this.style.zIndex = 0;
			this.classList.remove("closing");
		});

	}
});
