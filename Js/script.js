$(document).ready(function(){
  
  $("#pages").mouseenter( function () {
    $("#pages_childeren").slideDown(1000);
  });
  
  $("#pages").mouseleave( function () {
      $("#pages_childeren").slideUp(500);
  });

  $("#doctors").mouseenter( function () {
    $("#doctors_childeren").slideDown(1000);
  });
  
  $("#doctors").mouseleave( function () {
      $("#doctors_childeren").slideUp(500);
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
});