Pressure.set('#test', {
    change: function(force, event){
      console.log(force);
    }
  });
  
  if(typeof(Storage) !== "undefined"){
    sessionStorage.setItem("size", 10);
  }
  else {
    console.log("%c This Browser Doesn't support Web Storage ...", "color:red")
  }

  context = document.getElementById('test').getContext("2d");
  
  $('#test').mousedown(function(e){
    var mouseX = e.pageX - this.offsetLeft;
    var mouseY = e.pageY - this.offsetTop;
          
    paint = true;
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
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
    
    context.strokeStyle = "black";
    context.lineJoin = "round";
    context.lineWidth = 100;
              
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

    function clear(){
      context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
    }
  }