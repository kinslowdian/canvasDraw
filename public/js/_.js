// DEBUG
var trace = function(msg){ console.log(msg); };

var canvas0;
var context0;
var canvas1;
var context1;

var displayProps;

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
	canvas0 = document.querySelector(".display0");
	context0 = canvas0.getContext("2d");

	canvas0.width = displayProps.w;
	canvas0.height = displayProps.h;

	context0.beginPath();

	canvas1 = document.querySelector(".display1");
	context1 = canvas1.getContext("2d");

	canvas1.width = displayProps.w;
	canvas1.height = displayProps.h;

	context1.beginPath();
	
	draw_advanced(context0, 'rgba(255, 0, 51, 0.4)', 20);
	draw_advanced(context1, 'rgba(0, 0, 0, 0.4)', 40);
}

function draw_advanced(ctx, c, r)
{
	var x;
	var y;
	var freq;

	x = Math.random() * displayProps.w;
	y = Math.random() * displayProps.h;

	ctx.lineWidth = 0.01;
	ctx.strokeStyle = c;

	ctx.lineTo(x, y);

	ctx.stroke();

	freq = setTimeout(draw_advanced, r, ctx, c);
}

