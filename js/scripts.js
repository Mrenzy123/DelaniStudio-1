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
        $("#hideit1").addClass("hide1")   
    });
    $("#blackproject").mouseleave(function(){
        $("#hideit1").hide(); 
    });
    $("#Ontario").mouseover(function(){
        $("#hideit2").show();
        $("#hideit2").addClass("hide2")   
    });
    $("#Ontario").mouseleave(function(){
        $("#hideit2").hide(); 
    });
    $("#Orange").mouseover(function(){
        $("#hideit3").show();
        $("#hideit3").addClass("hide3")   
    });
    $("#Orange").mouseleave(function(){
        $("#hideit3").hide(); 
    });
    $("#Studio").mouseover(function(){
        $("#hideit4").show();
        $("#hideit4").addClass("hide4")   
    });
    $("#Studio").mouseleave(function(){
        $("#hideit4").hide(); 
    });
    $("#HAGD").mouseover(function(){
        $("#hideit5").show();
        $("#hideit5").addClass("hide5")   
    });
    $("#HAGD").mouseleave(function(){
        $("#hideit5").hide(); 
    });
    $("#Input").mouseover(function(){
        $("#hideit6").show();
        $("#hideit6").addClass("hide6")   
    });
    $("#Input").mouseleave(function(){
        $("#hideit6").hide(); 
    });
    $("#Burned").mouseover(function(){
        $("#hideit7").show();
        $("#hideit7").addClass("hide7")   
    });
    $("#Burned").mouseleave(function(){
        $("#hideit7").hide(); 
    });
    $("#Giraffe").mouseover(function(){
        $("#hideit8").show();
        $("#hideit8").addClass("hide8")   
    });
    $("#Giraffe").mouseleave(function(){
        $("#hideit8").hide(); 
    });
    $("#myform").submit(function(event){
       var myName = $("input#inpput1").val();
       var myEmail = $("input#input2").val();
       var comment1 = $("textarea#thirdinput").val();
        if((myName=== "")||(myEmail=== "")||(comment1=== "")){
            alert("Please fill the required space.");
        } else {
        alert(myName + ", we have received your message. Thank you for reaching out to us.");
        $("#inpput1").val("");
        $("#input2").val("");
        $("#thirdinput").val("");
    }
    
    event.preventDefault();
    });
    
});