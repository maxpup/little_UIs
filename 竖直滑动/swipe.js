(function () {
    var container = document.getElementsByClassName('container')[0];
    var pages = document.getElementsByClassName('page');
    var count = pages.length;
    var nowIndex = 0;
    var img_up = document.createElement('p');
    var isTouch = true;
    //img_up.src = 'img/arrow_up.png';
    img_up.textContent = '︿';
    img_up.className = 'img_up';
    console.dir(img_up);
    var img_down = document.createElement('p');
    function up(){
      if(nowIndex<(count-1)){
        ++nowIndex;
        for(var i=0;i<count;i++){
          pages[i].style.transform = 'translateY(-'+nowIndex+'00vh)';
          pages[i].style.transition = 'transform 1s ease-in';
        }
      }
      console.log(nowIndex);
    }
    function down(){
      if(nowIndex>0){
        --nowIndex;
        for(var i=0;i<count;i++){
          pages[i].style.transform = 'translateY(-'+nowIndex+'00vh)';
          pages[i].style.transition = 'transform 1s ease-in';
        }
      }
      console.log(nowIndex);
    }
    img_down.addEventListener('click',function(e) {
      console.log('按键按下去');
      up();
    });
    img_up.addEventListener('click',function(e){
      console.log('按键按下去');
      down();
    });
    //img_down.src = 'img/arrow_down.png';
    img_down.textContent = '﹀';
    img_down.className = 'img_down';
    container.appendChild(img_up);
    container.appendChild(img_down);

    var startX,startY,endX,endY;
    function touchStart(e){
      console.log('手指按下去');
      var touch = e.targetTouches[0]; //获取第一个触点
      var x = Number(e.targetTouches[0].pageX); //页面触点X坐标
      var y = Number(e.targetTouches[0].pageY); //页面触点Y坐标
      startX = x;
      startY = y;
    }
    function touchMove(e){
      console.log('移动手指');
      e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
      var isTouch = true;
      var touch = e.targetTouches[0];
      endY = touch.pageY;
    }
    function touchEnd(e){
      //e.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
      //isTouch = false;
      console.log('抬起手指');
      var delta = endY - startY;
      if(delta === 0)return;
      if(delta>0){
        down();
      }else if(delta<0){
        up();
      }
    }
    //var supportTouch = "createTouch" in document //判断是否支持触摸事件
    var supportTouch = true;
    if(supportTouch){
      console.log('支持触摸事件');
      document.addEventListener('touchstart',touchStart);
      document.addEventListener('touchmove',touchMove);
      document.addEventListener('touchend',touchEnd);
    }else{
      console.log('不支持触摸事件');
      container.addEventListener('mousedown',function(e) {
        console.log('鼠标按下了');
        console.dir(e);
      });
      container.addEventListener('mousemove',function(e){
        console.log('鼠标移动了');
        console.dir(e);
      });
      container.addEventListener('mouseup',function(e){
        console.log('鼠标弹起了');
        console.dir(e);
      });
    }

})()
