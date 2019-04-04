function mouseCoords(e) {
// Для браузера IE
	if (document.all)  { 
	  var x = event.pageX - event.target.offsetLeft;
	  var y = event.pageY - event.target.offsetTop;

	  e.target.style.setProperty('--x', `${x}px`);
	  e.target.style.setProperty('--y', `${y}px`); 
	// Для остальных браузеров
	} else {
	  var x = e.pageX - e.target.offsetLeft;
	  var y = e.pageY - e.target.offsetTop;

	  e.target.style.setProperty('--x', `${x}px`);
	  e.target.style.setProperty('--y', `${y}px`);
	}
}
