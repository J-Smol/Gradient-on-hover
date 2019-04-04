# Gradient-on-hover
<b>Gradient effect, that track mouse movement, on hover</b>

To install the buttons on the site, follow the instructions below:

<ol>
<li>
Copy the jsmbutton.min.css and jsmbutton.min.js files to your site folders
</li>
<li>
Write down the path to them, for example
```
    `<link rel="stylesheet" type="text/css" href="rectangle.css">`
    `<script type ="text/javascript" src="rectangle.js"> </script>`
```
</li>
	<li>
		The button in the HTML file should be
		```
		<button class = "jsmbtn_rect jsmbtn_lg jsmbtn_15inv» onmousemove = "mouseCoords (event)">
			<span> Hover me! </span>
		</button>
			```
	</li>

</ol>

1. Copy the jsmbutton.min.css and jsmbutton.min.js files to your site folders

2. Write down the path to them, for example
       
<link rel = "stylesheet" type = "text / css" href = "rectangle.css">
<script type = "text / javascript" src = "rectangle.js"> </ script>

3. The button in the HTML file should be
        
<button class = "jsmbtn_rect jsmbtn_lg jsmbtn_15inv» onmousemove = "mouseCoords (event)">
	<span> Hover me! </ span>
</ button>

The button should have three classes:

First class - button view:
	jsmbtn_rect - button without corner rounding
	jsmbtn_simple - button with a slight rounding of corners
	jsmbtn_rounded - strong rounding of corners
	jsmbtn_round - round button

Second class - button size:
	jsmbtn_sm - width 150px
	jsmbtn_md - width 200px
	jsmbtn_lg - width 300px
	jsmbtn_xl - width 350px

You can also make a button of your size simply by rewriting the width value in your css file.

!!! Please note that the round buttons have their own sizes:
	jsmbtn_sm - width 100px, height 100px
	jsmbtn_md - 120px width, height 120px
	jsmbtn_lg - width 150px, height 150px
	jsmbtn_xl - width 180px, height 180px

Third class - Button Gradient Colors
All variations of gradients you can see in the file preview buttons.


!!! Also note that for the hover gradient to work, the button must have the attribute 
“onmousemove =“ mouseCoords (event) ".


If you wish, you can add an icon to the button, for example, Font Awesome -

<button class = "jsmbtn_simple jsmbtn_lg jsmbtn_1" onmousemove = "mouseCoords (event)">
	<i class = "fab fa-angellist"> </ i>
	<span> Hover me! </ span>
</ button>

How to add the font Font Awesome to your site, you can see on the official site Font Awesome

Unminified css and js files are in «Preview» folder
