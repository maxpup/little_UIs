(function () {
    var container = document.getElementsByClassName('container')[0];
    var pages = document.getElementsByClassName('page');
    var count = pages.length;
    var btn_right = document.createElement('p');
    btn_right.textContent = '》';
    btn_right.className = 'btn_right';
    var btn_left = document.createElement('p');
    btn_left.textContent = '《';
    btn_left.className = 'btn_left';
    var nowIndex = 0;
    function left(){
      if(nowIndex<count-1){
        ++nowIndex;
        for(var i=0;i<count;i++){
          pages[i].style.transform = 'translateX(-'+(nowIndex*100)+'vw)';
          pages[i].style.transition = 'transform 1s ease-in';
        }
      }
      console.log(nowIndex);
    }
    function right(){
      if(nowIndex>0){
        --nowIndex;
        for(var i=0;i<count;i++){
          pages[i].style.transform = 'translateX(-'+(nowIndex*100)+'vw)';
          pages[i].style.transition = 'transform 1s ease-in';
        }
      }
      console.log(nowIndex);
    }
    btn_right.addEventListener('click',function(e) {
      console.log('点击--向左滑动');
      left();
    });
    btn_left.addEventListener('click',function (e) {
      console.log('点击--向右滑动');
      right();
    })
    container.appendChild(btn_right);
    container.appendChild(btn_left);
    //监控触摸事件
    var startX,endX
    document.addEventListener('touchstart',function (e) {
      console.log('摸着屏幕了哦');
      startX = Number(e.targetTouches[0].pageX);
    });
    document.addEventListener('touchmove',function (e) {
      endX = Number(e.targetTouches[0].pageX);
    });
    document.addEventListener('touchend',function (e) {
      var elta = endX - startX;
      if(elta === 0)return;
      if(elta>0){
        right();
      }else if(elta<0){
        left();
      }
      console.log('哟，开始滑动~~');
    });
})()
