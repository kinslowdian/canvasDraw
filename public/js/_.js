// DEBUG
var trace = function(msg){ console.log(msg); };

var canvas;
var context;

var displayProps;

var drawShowBasic = false;

var freq;

function pageLoad_init()
{
	trace("pageLoad_init();");

	displayProps = {};
	displayProps.w = window.screen.width;
	displayProps.h = window.screen.height;

	draw_init();
}

function draw_init()
{
	canvas = document.querySelector(".display");
	context = canvas.getContext("2d");

	canvas.width = displayProps.w;
	canvas.height = displayProps.h;

	if(drawShowBasic)
	{
		draw_basic();
	}

	else
	{
		context.beginPath();
		draw_advanced();
	}
}

function draw_basic()
{
	context.beginPath();

	context.lineWidth = 0.01;
	context.strokeStyle = '#ff0033';

	for(var i = 0; i < 6000; i++)
	{
		var x;
		var y;

		x = Math.random() * displayProps.w;
		y = Math.random() * displayProps.h;

		context.lineTo(x, y);
	}

	context.stroke();	
}

function draw_advanced()
{
	var x;
	var y;
	
	// context.beginPath();

	x = Math.random() * displayProps.w;
	y = Math.random() * displayProps.h;

	context.lineWidth = 0.01;
	// context.strokeStyle = '#ff0033';
	context.strokeStyle = 'rgba(255, 0, 51, 0.4)';

	context.lineTo(x, y);

	context.stroke();

	freq = setTimeout(draw_advanced, 20);
}

