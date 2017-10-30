$(document).ready(function() {
             
 
//////////////////ajax///////////////////////////

  $("#aj_bt1").click(function(){
    $("#ajax_content").html("Loading...");
      $.ajax({
        method:"GET",
        url: "./ajax_data",
        data:{
          breakfast: "T",
          lunch:"F",
          dinner:"F",
          snack:"F",
        },
        success: function(data) {
          setTimeout(function(){$("#ajax_content").html(data)},800)
        }  
      });
  });
   $("#aj_bt2").click(function(){
    $("#ajax_content").html("Loading...");
      $.ajax({
        method:"GET",
        url: "./ajax_data",
        data:{
          breakfast: "F",
          lunch:"T",
          dinner:"F",
          snack:"F",
        },
        success: function(data) {
         setTimeout(function(){$("#ajax_content").html(data)},800)
       }
      });
  });
  $("#aj_bt3").click(function(){
    $("#ajax_content").html("Loading...");
      $.ajax({
        method:"GET",
        url: "./ajax_data",
        data:{
          breakfast: "F",
          lunch:"F",
          dinner:"T",
          snack:"F",

        },
        success: function(data) {
         setTimeout(function(){$("#ajax_content").html(data)},800)
       }
      });
  });
  $("#aj_bt4").click(function(){
    $("#ajax_content").html("Loading...");
      $.ajax({
          method:"GET",
          url: "./ajax_data",
          data:{
          breakfast: "F",
          lunch:"F",
          dinner:"F",
          snack:"T",

       },
       success: function(data) {
         setTimeout(function(){$("#ajax_content").html(data)},800)
       }
     });
   });

});

