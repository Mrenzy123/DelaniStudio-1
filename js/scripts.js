$(document). ready(function(){
    $("#design").click(function(){
        $("img#designimage").toggle();
        $("p#designimage").toggle();
        $("h5#design1").toggle();
        $("p#design1").toggle();
    });
    $("#development").click(function(){
        $("img#designdevt").toggle();
        $("p#designdevt").toggle();
        $("h5#design2").toggle();
        $("p#design2").toggle();
    });
    $("#product").click(function(){
        $("img#designprod").toggle();
        $("p#designprod").toggle();
        $("h5#design3").toggle();
        $("p#design3").toggle();
    }); 
    $("#blackproject").mouseover(function(){
        $("#hideit1").show();
        $("#hideit1").addClass("hide")   
    });
    $("#blackproject").mouseleave(function(){
        $("#hideit1").hide();
         
    });
    
});