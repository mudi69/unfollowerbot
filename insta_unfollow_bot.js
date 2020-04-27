function t(i) {
    var i;   
	console.log("Person will be unfollowed at: " + (((i * 30000)) / 2000) + " seconds from now on"); // Calculates the time to wait.
	var e = {
		a: new Date().getHours(),
		b: new Date().getMinutes(),
		c: new Date().getSeconds()
	}
	console.log(e.a + ":" + e.b + ":" + e.c); // Log the current time in the console.
	
    setTimeout(function() {
        document.getElementsByTagName("button")[i].click();
		console.log("Clicked on unfollow button");
		
		
		for(var a = 0; a < document.getElementsByClassName("aOOlW").length; a++) {
			if(document.getElementsByClassName("aOOlW")[a].innerText == 'Niet meer volgen') {
				document.getElementsByClassName("aOOlW")[a].click();
				console.log("Verified unfollow event");
			}
		}
		
    }, i * 30000); // Timeout each 30 seconds.
}

for(var i = 0; i < document.getElementsByTagName("button").length; i++) {
	// Loop through all the button elements.
	
	if(document.getElementsByTagName("button")[i].innerText == 'Volgend') {
		// Checks if the button contains the text 'Volgend'.
		
		t(i); // Call the t function.
	}
}

(function() {
	setInterval(function() {
		var e = {
			a: new Date().getHours(),
			b: new Date().getMinutes(),
			c: new Date().getSeconds()
		}
	document.querySelector(".m82CD").innerText = e.a + ":" + e.b + ":" + e.c;
	}, 1000 / 60);
})();