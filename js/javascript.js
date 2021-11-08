    //header按鈕

$(function(){
    $('header .inputBox').click(function(){
        $(this).addClass('active');
    })
    $('header .inputBox input').blur(function(){
        $('header .inputBox').removeClass('active');
    })
    var handle = null;
	$('header .inputBox').mouseover(function(){
		
		clearTimeout(handle);
	}).mouseout(function(){
		handle = setTimeout(function(){
			$('header .inputBox').removeClass('active');
		},1500);
	})

    $('.webBtn').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mainBox').attr('class','mainBox web');
    })
    $('.mobileBtn').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        $('.mainBox').attr('class','mainBox mobile');
    })
})

    //mainBox左右拖曳滑動效果

$(function(){
    var drag = function(obj){  

        obj.bind("mousedown",start);  

        function start(event){  
            if(event.button == 0){//判斷是否點選滑鼠左鍵  
                gapX=event.clientX;
                startx = $(window).scrollLeft();  // scroll的初始位置

                //movemove事件必須繫結到$(document)上，滑鼠移動是在整個螢幕上的  
                $(document).bind("mousemove",move);  
                //此處的$(document)可以改為obj  
                $(document).bind("mouseup",stop);                           
            }  
            return false;//阻止預設事件或冒泡  
        }  
        function move(event){  
            var left = event.clientX-gapX; // 滑鼠移動的相對距離

            $(window).scrollLeft(startx - left );

            return false;//阻止預設事件或冒泡  
        }  
        function stop(){  
            //解繫結，這一步很必要，前面有解釋  
            $(document).unbind("mousemove",move);  
            $(document).unbind("mouseup",stop);  
        }  
    }  

    obj = $(".mainBox");  

    drag(obj);//傳入的必須是jQuery物件，否則不能呼叫jQuery的自定義函式 
})

    //自動抓取herf

$(function(){
    $('.img').each(function(index){
        $('#web_demo'+index+' .img').css('background','url(./images/demoImg/web_demo'+index+'.jpg)');
        $('#web_demo'+index+' .link').attr('href','./images/demoImg/web_demo'+index+'.jpg');
        $('#mobile_demo'+index+' .img').css('background','url(./images/demoImg/mobile_demo'+index+'.jpg)');
        $('#mobile_demo'+index+' .link').attr('href','./images/demoImg/mobile_demo'+index+'.jpg');
        $('.img').css('background-size','cover');
    })
})

    //假推flex

$(function(){
    var s = $('ul').children('s');
    $('.forWeb .img').each(function(index){
        $(s).clone().appendTo('ul');
        $(s).clone().appendTo('.shoppingWindow');
    })
})

    //回到頂端按鈕

$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 1){
                $(".gotop").fadeIn('200');
        } else{
                $(".gotop").fadeOut('200');
        };
    })
    $(".gotop").click(function(){
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'); //各瀏覽器相容性
        $body.delay('0').animate({
                scrollTop:0
        },500);
    })
})

    //隱藏列達成條件

$(function(){
    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        if(scrollVal > 1){
                $(".hideBar").addClass('display');
                $('header').addClass('scroll');
        } else{
                $(".hideBar").removeClass('display');
                $('header').removeClass('scroll');
        };
    })
})

    //主物件hover時a跑版效果修正

$(function(){
    $('.forWeb li,.forMobile li').hover(function(){
        $(this).addClass('hoverA');
    })
    var handle = null;
    $('.forWeb li .link,.forMobile li .link').click(function(){
        handle = setTimeout(function(){
			$('.forWeb li,.forMobile li').removeClass('hoverA');
		},500);
    })
})

    //transCover觸發
    
$(function(){
    $('.enterBtn').click(function(){
        $(this).addClass('trans');
        
        setTimeout(function(){
            $('.mainAnime').fadeOut(500);
        },700)
    })
})

    //手機版調整
function isMobile() {

    try{ document.createEvent("TouchEvent"); return true; }

    catch(e){ return false;}

}
$(function(){
    if(isMobile()){
        $('header,main').css('min-width','0px');
    }
})

//以下為開場動畫特效

//繞動碎片特效
$(function(){
    function getRandom(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    }

    var t = document.querySelectorAll('.innerBox > span');
    var tb = document.getElementsByClassName('flyDebris');
    var t_Total = t.length;

    for(i = 0;i <= t_Total;i++){
        t[i].style.animationDuration = getRandom(1,10) + 's';
        t[i].style.top = getRandom(-500,500) + 'px';
        t[i].style.left = getRandom(500,700) + 'px';
        t[i].style.width = getRandom(10,20) + 'px';
        t[i].style.height = getRandom(10,20) + 'px';

        console.log(i);

        setTimeout(function(){
            for(h = 0;h <= t_Total;h++){
                t[h].style.width = getRandom(30,50) + 'px';
                t[h].style.height = getRandom(30,50) + 'px';
            }
        },2500)

        setTimeout(function(){
            $(tb).fadeOut('1000');
        },8800);
    }
})

//破碎動畫特效
$(function(){
    var tmax_optionsGlobal = {
        repeat: 0,
        repeatDelay: 0.65,
        delay: 8
    };
      
    CSSPlugin.useSVGTransformAttr = true;
    
    var tl = new TimelineMax(tmax_optionsGlobal),
        path = 'svg *',
        stagger_val = 0.0125,
        duration = 1.5;
    
    $.each($(path), function(i, el) {
        tl.set($(this), {
            x: '+=' + getRandom(-1000, 0),
            y: '+=' + getRandom(200, 0),
            rotation: '+=' + getRandom(-720, 720),
            scale: 0,
            opacity: 0
        });
    });
    
    var stagger_opts_to = {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        ease: Power4.easeInOut
    };
    
    tl.staggerTo(path, duration, stagger_opts_to, stagger_val);
    
    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }
})

//背景粒子特效
// Configure
var MAX_DISTANCE  = 80,
    PARTICLES     = 150,
    PARTICLE_SIZE = 5;

// No configure! :p
Math.Tau = Math.PI * 2;
Math.rand = function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Math.map = function map(value, imin, imax, omin, omax) {
  return ((value - imin) * (omax - omin) / (imax - imin) + omin);
};

window.requestAnimFrame = (function(){
  return window.requestAnimationFrame    ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    function( callback ){
      window.setTimeout(callback, 1000 / 60);
    };
})();

window.addEventListener('load', function(event) {
  var canvas  = document.getElementById('c');
  var context = canvas.getContext('2d');
  var width, height;
  var particleCounter = 0,
      hover = false,
      stats = new Stats(),
      mmon = new MousePositionMonitor(),
      is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

  stats.setMode(0); // Start off with FPS mode

  // Place the statistics at the bottom right.
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.right = '5px';
  stats.domElement.style.bottom = '5px';
  stats.domElement.style.display = 'none';
  
  document.body.appendChild(stats.domElement);
  
  context.lineWidth = "hairline";
  
  var resize = function(event) {
    width  = canvas.width  = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }; resize();
  
  window.addEventListener('resize', resize);
  
  canvas.addEventListener('mouseenter', function() {
    hover = true;
  });

  canvas.addEventListener('mouseleave', function() {
    hover = false;
  });
  
  var Color = function Color(r, g, b, a) {
    this.r = Math.floor(r);
    this.g = Math.floor(g);
    this.b = Math.floor(b);
    this.a = Math.floor(a || 255);
  };
  
  Color.prototype.clone = function() {
    return new Color(this.r, this.g, this.b, this.a);
  };
  
  Color.prototype.toString = function() {
    if(this.a === 255) {
      return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    } else {
      return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + (this.a / 255) + ')';
    }
  };
  
  var Particle = function Particle(x, y, size, color) {
    this.x  = x;
    this.y  = y;
    this.s  = size;
    this.r  = size / 2;
    this.vx = (Math.random() < 0.5 ? -1 : 1) * Math.rand(0.1, 0.5);
    this.vy = (Math.random() < 0.5 ? -1 : 1) * Math.rand(0.1, 0.5);
    this.id = particleCounter++;
    
    if(color instanceof Color) {
      this.c = color;
    } else {
      this.c = new Color(255, 255, 255, 255);
    }
  };
  
  Particle.prototype.distance = function(that) {
    if(that instanceof Particle) {
      return Math.sqrt((this.x-that.x) * (this.x - that.x) + (this.y - that.y) * (this.y - that.y));
    }
  };
  
  Particle.prototype.step = function() {
    this.x = (this.x + this.vx);
    if(this.x < this.r) {
      this.x = this.r;
      this.vx *= -1;
    } else if(this.x > width - this.r) {
      this.x = width - this.r;
      this.vx *= -1;
    }
    
    this.y = (this.y + this.vy);
    if(this.y < this.r) {
      this.y = this.r;
      this.vy *= -1;
    } else if(this.y > height - this.r) {
      this.y = height - this.r;
      this.vy *= -1;
    }
  };
  
  Particle.prototype.render = function() {
    context.fillStyle = this.c.toString();
    context.beginPath();
    context.arc(this.x, this.y, Math.floor(this.s / 2), 0, Math.Tau, false);
    context.closePath();
    context.fill();
  };
  
  var particles = [];
  for(var i = 0; i < PARTICLES - 1; i++) {
    particles.push(
      new Particle(
        Math.random() * width, 
        Math.random() * height, 
        PARTICLE_SIZE, 
        new Color(
          Math.random() * 255, 
          Math.random() * 255, 
          Math.random() * 255, 
          255)
      )
    );
  }
  
  // this one is controllable by mouse movement.
  var mouseParticle = new Particle(
    Math.random() * width, 
    Math.random() * height, 
    PARTICLE_SIZE * 2, 
    new Color(0, 200, 100, 255)
  );
  
  mouseParticle.imp = true;
  
  particles.push(mouseParticle);

  var render = function() {
    //context.clearRect(0, 0, width, height);
    context.fillStyle = 'rgba(10, 16, 46, 1)';
    context.fillRect(0, 0, width, height);
    
    // render all the particles and check distances
    var paired = {};
    var ipart  = PARTICLES;
    while(ipart--) {
      var p1    = particles[ipart];
      var jpart = ipart;
      
      p1.step();
      if(p1.imp && hover) {
        var pos = mmon.getMousePosition();
        p1.x = pos.x;
        p1.y = pos.y;
      }
      p1.render();
      
      while(jpart--) {
        var p2 = particles[jpart];
        
        if(p1 !== p2 && !paired[p1.id + '-' + p2.id] && !paired[p2.id + '-' + p1.id]) {
          var distance = p1.distance(p2);
          if(distance < MAX_DISTANCE) {
            if(!is_firefox) {
              var grd = context.createLinearGradient(p1.x, p1.y, p2.x, p2.y),
                  c1 = p1.c.clone(), c2 = p2.c.clone();

              c1.a = c2.a = Math.floor(Math.map(distance, MAX_DISTANCE, 0, 0, 255));

              grd.addColorStop(0, c1), grd.addColorStop(1, c2);

              context.strokeStyle = grd;
            } else {
              var c = p1.c.clone();
              c.a = Math.floor(Math.map(distance, MAX_DISTANCE, 0, 0, 255));
              context.strokeStyle = c.toString();
            }
            
            context.beginPath();
              context.moveTo(p1.x, p1.y);
              context.lineTo(p2.x, p2.y);
            context.closePath();
            context.stroke();
            
            paired[p1.id + '-' + p2.id] = paired[p2.id + '-' + p1.id] = true;
          }
        }
      }
    }
  };
  
  var loop = function() {
    requestAnimFrame(loop);
    stats.begin();
    render();
    stats.end();
  }; loop();
});

//轉動球體特效//
var renderer, scene, camera, composer, circle, skelet, particle;

window.onload = function() {
  init();
  animate();
}

function init() {
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0.0);
  document.getElementById('canvas').appendChild(renderer.domElement);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.z = 400;
  scene.add(camera);

  circle = new THREE.Object3D();
  skelet = new THREE.Object3D();
  particle = new THREE.Object3D();

  scene.add(circle);
  scene.add(skelet);
  scene.add(particle);

  var geometry = new THREE.TetrahedronGeometry(2, 0);
  var geom = new THREE.IcosahedronGeometry(7, 1);
  var geom2 = new THREE.IcosahedronGeometry(15, 1);

  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading
  });

  // for (var i = 0; i < 1000; i++) {
  //   var mesh = new THREE.Mesh(geometry, material);
  //   mesh.position.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
  //   mesh.position.multiplyScalar(90 + (Math.random() * 700));
  //   mesh.rotation.set(Math.random() * 2, Math.random() * 2, Math.random() * 2);
  //   particle.add(mesh);
  // }

  var mat = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    shading: THREE.FlatShading
  });

  var mat2 = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    wireframe: true,
    side: THREE.DoubleSide

  });

  var planet = new THREE.Mesh(geom, mat);
  planet.scale.x = planet.scale.y = planet.scale.z = 16;
  circle.add(planet);

  var planet2 = new THREE.Mesh(geom2, mat2);
  planet2.scale.x = planet2.scale.y = planet2.scale.z = 10;
  skelet.add(planet2);

  var ambientLight = new THREE.AmbientLight(0x2b2b2b );
  scene.add(ambientLight);
  
  var lights = [];
      lights[0] = new THREE.DirectionalLight( 0x404040, 1 );
      lights[0].position.set( 1, 0, 0 );
      lights[1] = new THREE.DirectionalLight( 0xfb8e6a, 1 );
      lights[1].position.set( 0.75, 1, 0.5 );
      lights[2] = new THREE.DirectionalLight( 0x451e61, 1 );
      lights[2].position.set( -0.75, -1, 0.5 );
      scene.add( lights[0] );
      scene.add( lights[1] );
      scene.add( lights[2] );
  

  window.addEventListener('resize', onWindowResize, false);

};

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  particle.rotation.x += 0.0000;
  particle.rotation.y -= 0.0040;
  circle.rotation.x -= 0.0020;
  circle.rotation.y -= 0.0030;
  skelet.rotation.x -= 0.0010;
  skelet.rotation.y += 0.0020;
  renderer.clear();

  renderer.render( scene, camera )
};

//按鈕特效
$(function(){
  function pop (e) {
    let amount = 100;
  
    // Quick check if user clicked the button using a keyboard
    if (e.clientX === 0 && e.clientY === 0) {
      const bbox = e.target.getBoundingClientRect();
      const x = bbox.left + bbox.width / 2;
      const y = bbox.top + bbox.height / 2;
      for (let i = 0; i < 0  ; i++) {
        // We call the function createParticle 30 times
        // We pass the coordinates of the button for x & y values
        createParticle(x, y, e.target.dataset.type);
      }
    } else {
      for (let i = 0; i < amount; i++) {
        createParticle(e.clientX, e.clientY + window.scrollY, e.target.dataset.type);
      }
    }
  }
  function createParticle (x, y, type) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    let width = Math.floor(Math.random() * 30 + 8);
    let height = width;
    let destinationX = (Math.random() - 0.5) * 2000;
    let destinationY = (Math.random() - 0.5) * 1500;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 200;
    
    switch (type) {
      case 'square':
        particle.style.background = `hsl(${Math.random() * 90 + 270}, 70%, 60%)`;
        // particle.style.borderRadius = '50%';
        particle.style.clipPath = "polygon(50% 0%, 0% 100%, 100% 100%)";
        // particle.style.border = '1px solid white';
    }
    
    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    const animation = particle.animate([
      {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
        opacity: 1
      },
      {
        transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
        opacity: 0
      }
    ], {
      duration: Math.random() * 1000 + 3000,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      delay: delay
    });
    animation.onfinish = removeParticle;
  }
  function removeParticle (e) {
    e.srcElement.effect.target.remove();
  }
  
  if (document.body.animate) {
    document.querySelectorAll('button').forEach(button => button.addEventListener('click', pop));
  }
})

$(function(){
    $('.mainAnime button').click(function(){
        $(this).removeClass('display');

        $("#canvas").css({
            opacity : 0,
            transform : 'scale(0)',
        })

        $('.mainAnime').fadeOut(500);
    })
})

$(function(){
    setTimeout(function(){
        $('.loading').fadeOut(500);
    },2500);
})

// $(function(){
//   if(document.readyState === 'complete'){
//     $('.loading').fadeOut(500);
//   }
// })

//--我是分隔線--//

$(function(){
  window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

  var starDensity = .216;
  var speedCoeff = .05;
  var width;
  var height;
  var starCount;
  var circleRadius;
  var circleCenter;
  var first = true;
  var giantColor = '180,184,240';
  var starColor = '226,225,142';
  var cometColor = '226,225,224';
  var canva = document.getElementById('universe');
  var stars = [];

  windowResizeHandler();
  window.addEventListener('resize', windowResizeHandler, false);

  createUniverse();

  function createUniverse() {
    universe = canva.getContext('2d');

    for (var i = 0; i < starCount; i++) {
      stars[i] = new Star();
      stars[i].reset();
    }

    draw();
  }

  function draw() {
    universe.clearRect(0, 0, width, height);

    var starsLength = stars.length;

    for (var i = 0; i < starsLength; i++) {
      var star = stars[i];
      star.move();
      star.fadeIn();
      star.fadeOut();
      star.draw();
    }

    window.requestAnimationFrame(draw);
  }

  function Star() {

    this.reset = function() {
      this.giant = getProbability(3);
      this.comet = this.giant || first ? false : getProbability(10);
      this.x = getRandInterval(0, width - 10);
      this.y = getRandInterval(0, height);
      this.r = getRandInterval(1.1, 2.6);
      this.dx = getRandInterval(speedCoeff, 6 * speedCoeff) + (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120) + speedCoeff * 2;
      this.dy = -getRandInterval(speedCoeff, -1 * speedCoeff) - (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120);
      this.fadingOut = null;
      this.fadingIn = true;
      this.opacity = 0;
      this.opacityTresh = getRandInterval(.2, 1 - (this.comet + 1 - 1) * .4);
      this.do = getRandInterval(0.0005, 0.002) + (this.comet + 1 - 1) * .001;
    };

    this.fadeIn = function() {
      if (this.fadingIn) {
        this.fadingIn = this.opacity > this.opacityTresh ? false : true;
        this.opacity += this.do;
      }
    };

    this.fadeOut = function() {
      if (this.fadingOut) {
        this.fadingOut = this.opacity < 0 ? false : true;
        this.opacity -= this.do / 2;
        if (this.x > width || this.y < 0) {
          this.fadingOut = false;
          this.reset();
        }
      }
    };

    this.draw = function() {
      universe.beginPath();

      if (this.giant) {
        universe.fillStyle = 'rgba(' + giantColor + ',' + this.opacity + ')';
        universe.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
      } else if (this.comet) {
        universe.fillStyle = 'rgba(' + cometColor + ',' + this.opacity + ')';
        universe.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);

        //comet tail
        for (var i = 0; i < 30; i++) {
          universe.fillStyle = 'rgba(' + cometColor + ',' + (this.opacity - (this.opacity / 20) * i) + ')';
          universe.rect(this.x - this.dx / 4 * i, this.y - this.dy / 4 * i - 2, 2, 2);
          universe.fill();
        }
      } else {
        universe.fillStyle = 'rgba(' + starColor + ',' + this.opacity + ')';
        universe.rect(this.x, this.y, this.r, this.r);
      }

      universe.closePath();
      universe.fill();
    };

    this.move = function() {
      this.x += this.dx;
      this.y += this.dy;
      if (this.fadingOut === false) {
        this.reset();
      }
      if (this.x > width - (width / 4) || this.y < 0) {
        this.fadingOut = true;
      }
    };

    (function() {
      setTimeout(function() {
        first = false;
      }, 50)
    })()
  }

  function getProbability(percents) {
    return ((Math.floor(Math.random() * 1000) + 1) < percents * 10);
  }

  function getRandInterval(min, max) {
    return (Math.random() * (max - min) + min);
  }

  function windowResizeHandler() {
    width = window.innerWidth;
    height = window.innerHeight;
    starCount = width * starDensity;
    circleRadius = (width > height ? height / 2 : width / 2);
    circleCenter = {
      x: width / 2,
      y: height / 2
    }

    canva.setAttribute('width', width);
    canva.setAttribute('height', height);
  }
})