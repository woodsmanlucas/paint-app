Pressure.set('#test', {
    change: function(force, event){
      // console.log(force);
    }
  });

  $('.colors').click(_ => $(this).hide());


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
      addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
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
  var paint;
  
  function addClick(x, y, dragging)
  {
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
  }
  
  function redraw(){
    context.clearRect(0, 0, context.canvas.style.width, context.canvas.style.height); // Clears the canvas

    
    context.strokeStyle = "black";
    context.lineJoin = "round";
    context.lineWidth = 10;
              
    for(var i=0; i < clickX.length; i++) {		
      context.beginPath();
      if(clickDrag[i] && i){
        context.moveTo(clickX[i-1], clickY[i-1]);
       }else{
         context.moveTo(clickX[i]-1, clickY[i]);
       }
       context.lineTo(clickX[i], clickY[i]);
       context.closePath();
       context.stroke();
    }
  }