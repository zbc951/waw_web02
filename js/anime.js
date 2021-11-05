CSSPlugin.useSVGTransformAttr = true;

var tmax_optionsGlobal = {
	repeat: 1,
	repeatDelay: 5,
	yoyo: true
};
  
var tl = new TimelineMax(tmax_optionsGlobal),
	path = '.svgWrapper *',
	stagger_val = 0.00125,
	duration = 2,
	delay = 1;
	
var stagger_opts_to = {
	x: 0,
	y: 0,
	opacity: 1,
	scale: 1,
	rotation: 0,
	ease: Power4.easeOut
};

$.each($(path), function(i, el) {
	tl.set($(this), {
		x: '+=' + getRandom(-500, 500),
		y: '+=' + getRandom(-500, 500),
		rotation: '+=' + getRandom(-720, 720),
		scale: 0,
		opacity: 0
	});
});
  
tl.staggerTo(path, duration, stagger_opts_to, stagger_val, delay);
  
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

// $('.enterBtn').click(function(){
// 	tl.play(5).repeat(1).yoyo(true);
// })

$(function(){
	var animeRe = function(){
		setTimeout(function(){
			tl.restart();
			animeRe();
		},10500)
	}
	animeRe();
})