$(".mainImage").mouseenter(function() {
   $(".mainImage").hide(); 
   $(".hide").show(); 
});

$(".mainImage").mouseleave(function() {
    $(".hide").hide();
    $(".mainImage").show();
});

$(".album1").click(function() {
   $(".album1").fadeOut(); 
   $(".album2").fadeOut(); 
   $(".album3").fadeOut(); 
   $(".button").show();
});

$(".button").click(function() {
   $(".album1").fadeIn(); 
   $(".album2").fadeIn(); 
   $(".album3").fadeIn(); 
   $(".button").hide();
});

$(".send").click(function() {
    let comment=$(".donate").val();
    $(".support").text(comment);
    alert(comment);
});



