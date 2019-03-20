//script.js
//window.alert("hell");
$(function(){
//    draggables
    
    $(".box").draggable();
    $("#box1").draggable({scroll:true, revert: "invalid"});
     $("#box2").draggable({axis: "x"});
    $("#box3").draggable({axis: "y"});
    $("#box4").draggable({containment:".container",revert:"invalid"});

//dropaable
    
    $("#droppable").droppable({
        accept:"#box1",
        drop: function(){
            $(this).text("when a box got an attitude, drop it like this!");
        }
    });
    
//    sortable
    $("#sortable").sortable({
        connectWith: "#sortableToo",
        placeholder: "placeholder-box"
    });
    $("#sortableToo").sortable({
        connectWith:"#sortable"
    });
    
//    To Do List
    
    $("#todoList ul").sortable({
       connectWith: "ul",
        items: "li:not('.listTitle, .addItem')", 
        /*it will not connect the li belonging to the classes given*/
        placeholder: "emptySpace",
    });
    
    $("input").keydown(function(e){ /* e is the object of event which is to be handled*/
       if(e.keyCode == 13){
           //you pressed enter
           var item = $(this).val();
           $(this).parent().parent().append("<li>"+item+"/li>"); // input ke parent ke parent k paas jaake ek new li append karega 
           $(this).val("");  //vapas add new item ko empty karne ko
       } 
    });
    
    $("#trash").droppable({
        drop: function(event, ui){
            ui.draggable.remove(); //sortabel se automatic draggable hua tha usko drop kiya by drop function jo event n ui leta h aur ye sab droppable se hoga 
        }
    });
    
//    accordion
     $("#accordion").accordion({
        collapsible:true, //click pe collpase karna hai vapas , khudi jayega 
        heightStyle:"content" //jitna content h utna hi height lega by default vaise auto pe tha jo ki sabse bade tab ki size le raha tha but content dene se khali content ki height lega
     });
    
    
//    datepicker
    $(".date").datepicker({
        showOtherMonths:true,
        selectOtherMonths:true,
        showButtonPanel:true,
        changeMonth:true,
        changeYear:true,
        numberOfMonths:2,
        minDate:"-1M+2D",
        maxDate:"+1M",
    });
   
});