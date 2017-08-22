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
	
	draw_advanced0();
	draw_advanced1();
}

function draw_advanced0()
{
	var x;
	var y;
	var freq;

	x = Math.random() * displayProps.w;
	y = Math.random() * displayProps.h;

	context0.lineWidth = 0.01;
	context0.strokeStyle = 'rgba(255, 0, 51, 0.4)';

	context0.lineTo(x, y);

	context0.stroke();

	freq = setTimeout(draw_advanced0, 20);
}

function draw_advanced1()
{
	var x;
	var y;
	var freq;

	x = Math.random() * displayProps.w;
	y = Math.random() * displayProps.h;

	context1.lineWidth = 0.02;
	context1.strokeStyle = 'rgba(255, 255, 255, 0.4)';

	context1.lineTo(x, y);

	context1.stroke();

	freq = setTimeout(draw_advanced1, 40);
}

