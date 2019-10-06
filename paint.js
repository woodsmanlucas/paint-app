Pressure.set('#test', {
    change: function(force, event){
      // console.log(force);
    }
  });


  let color = 'black'
  let size = 10;

  $('.color').on('click', function () { color = this.id});


  context = document.getElementById('test').getContext("2d");
  
  $('#test').mousedown(function(e){
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;
    console.log(mouseY);
          
    paint = true;
    addClick(mouseX, mouseY);
    redraw();
  });

  
  $('#test').mousemove(function(e){
    if(paint){
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true, color);
      redraw();
    }
  });
  
  $('#test').mouseup(function(e){
    paint = false;
  });
  
  $('#test').mouseleave(function(e){
    paint = false;
  });
  
  var clickX = new Array();
  var clickY = new Array();
  var clickDrag = new Array();
  var colors = new Array();
  var sizes = new Array();
  var paint;
  
  function addClick(x, y, dragging, color, size)
  {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    colors.push(color)
    sizes
  }
  
  function redraw(){
    context.clearRect(0, 0, context.canvas.style.width, context.canvas.style.height); // Clears the canvas

    
    context.lineJoin = "round";
    context.lineWidth = 10;
    console.log(color);
              
    for(var i=0; i < clickX.length; i++) {		
      context.beginPath();
      if(clickDrag[i] && i){
        console.log(colors[i])
        context.strokeStyle = colors[i];
        context.moveTo(clickX[i-1], clickY[i-1]);
       }else{
         context.moveTo(clickX[i]-1, clickY[i]);
       }
       context.lineTo(clickX[i], clickY[i]);
       context.closePath();
       context.stroke();
    }
  }