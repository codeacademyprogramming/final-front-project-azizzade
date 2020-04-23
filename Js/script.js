$(document).ready(function(){
  
  $("#pages").mouseenter( function () {
    $("#pages_children").slideDown(1000);
  });
  
  $("#pages").mouseleave( function () {
      $("#pages_children").slideUp(500);
  });

  $("#doctors").mouseenter( function () {
    $("#doctors_children").slideDown(1000);
  });
  
  $("#doctors").mouseleave( function () {
      $("#doctors_children").slideUp(500);
  });

  $("#department").mouseenter( function () {
    $("#department_children").slideDown(1000);
  });
  
  $("#department").mouseleave( function () {
      $("#department_children").slideUp(500);
  });

  $("#blog").mouseenter( function () {
    $("#blog_children").slideDown(1000);
  });
  
  $("#blog").mouseleave( function () {
      $("#blog_children").slideUp(500);
  });

  $("#shop").mouseenter( function () {
    $("#shop_children").slideDown(1000);
  });
  
  $("#shop").mouseleave( function () {
      $("#shop_children").slideUp(500);
  });

  $("#search").click(function(){
    $(".modal_search").show(1000)
  })
  $(".close_btn").click(function(){
    $(".modal_search").hide(1000)
  })

  $(".departments").mouseenter(function(){
    $(this).find("#more_detail").css("color", "black")
    $(this).find("#more_detail_icon").show(500)
  })

  $(".departments").mouseleave(function(){
    $(this).find("#more_detail").css("color", " rgba(0, 125, 242, 1)")
    $(this).find("#more_detail_icon").hide(500)
  })

  $(".find_a_doctor").mouseenter(function(){
    $(this).find("#more_detail").css("color", "black")
    $(this).find("#more_detail_icon").show(500)
  })

  $(".find_a_doctor").mouseleave(function(){
    $(this).find("#more_detail").css("color", " rgba(0, 125, 242, 1)")
    $(this).find("#more_detail_icon").hide(500)
  })

  $(".appointment").mouseenter(function(){
    $(this).find("#more_detail").css("color", "black")
    $(this).find("#more_detail_icon").show(500)
  })

  $(".appointment").mouseleave(function(){
    $(this).find("#more_detail").css("color", " rgba(0, 125, 242, 1)")
    $(this).find("#more_detail_icon").hide(500)
  })

  $(".play_button").click(function(){
    $(".video_modal").show(1000)
  })
  $(".video_close_btn").click(function(){
    $(".video_modal").hide(1000)
  })

});