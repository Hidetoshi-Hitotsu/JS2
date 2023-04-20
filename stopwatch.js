
$(document).ready(function(){
  
  /*スタートボタンの挙動*/
  $("#startbutton").click(function(){
    $("#startbutton").prop('disabled',true);
    $("#stopbutton").prop('disabled',false);
    $("#resetbutton").prop('disabled',false);
    
    let time1 = document.getElementById("stopwatch1");
    let time2 = document.getElementById("stopwatch2");
    let time3 = document.getElementById("stopwatch3");
    let time4 = document.getElementById("stopwatch4");
    
    let count1 = time1.innerHTML;
    let count2 = time2.innerHTML;
    let count3 = time3.innerHTML;
    let count4 = time4.innerHTML;
    
    var intervalId1;
    var intervalId2;
    var intervalId3;
    var intervalId4;
    
    $(function(){
      intervalId4 = setInterval(function(){
        //ここに処理を書く
        count4++;
        if(count4<=9 ){
          time4.innerHTML = count4;
        }else if(count4 == 10){
          count4 = 0;
          time4.innerHTML = count4;
        }
      },100);
    });
    
    $(function(){
      intervalId3 = setInterval(function(){
        //ここに処理を書く
        count3++;
        if(count3<=9 ){
          time3.innerHTML = count3;
        }else if(count3 == 10){
          count3 = 0;
          time3.innerHTML = count3;
        }
      },1000);
    });
    
    $(function(){
      intervalId2 = setInterval(function(){
        //ここに処理を書く
        count2++;
        if(count2<=9 ){
          time2.innerHTML = count2;
        }else if(count2 == 10){
          count2 = 0;
          time2.innerHTML = count2;
        }
      },10000);
    });
    
    $(function(){
      intervalId1 = setInterval(function(){
        //ここに処理を書く
        count1++;
        if(count1<=9 ){
          time1.innerHTML = count1;
        }else if(count1 == 10){
          count1 = 0;
          time1.innerHTML = count1;
        }
      },100000);
    });
    /*スタートボタンここまで*/
    
    /* ストップボタンの挙動*/
    $("#stopbutton").click(function(){
      $("#startbutton").prop('disabled',false);
      $("#stopbutton").prop('disabled',true);
      $("#resetbutton").prop('disabled',false);
    
      $(function(){
        clearInterval(intervalId1);
        clearInterval(intervalId2);
        clearInterval(intervalId3);
        clearInterval(intervalId4);
      })
    });
    /* ストップボタンここまで*/
    
    /*リセットボタンの挙動*/
    $("#resetbutton").click(function(){
      $("#startbutton").prop('disabled',false);
      $("#stopbutton").prop('disabled',true);
      $("#resetbutton").prop('disabled',true);
    
      $(function(){
        clearInterval(intervalId1);
        clearInterval(intervalId2);
        clearInterval(intervalId3);
        clearInterval(intervalId4);
      })
      time1.innerHTML = 0;
      time2.innerHTML = 0;
      time3.innerHTML = 0;
      time4.innerHTML = 0;
    });
    /* リセットボタンここまで*/
  });
});
