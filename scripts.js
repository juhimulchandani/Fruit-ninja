/****************************************************************
    
//    FRUIT NINJA GAME
    
    *****************************************************************/
    
    var score;
    var playing = false;
    var fruits = ['apple','banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
    var trialsLeft;
    var action;//variable for setInterval
    var step;
    $(function () {
        $("#startreset").click(function(){
            if (playing == true){
                //i want to reset
                location.reload();
            }
            else{
                //  i want to play the game
                playing == true;
                score = 0;
                $("#scorevalue").text(score);
                trialsLeft = 3;
                $("#trialsLeft").show();
                addHearts();
                $("#gameOver").hide();
                $("#startreset").text("Reset Game");
                //start sending fruits
                startAction();
            }
        });
        
        function addHearts(){
            $("#trialsLeft").empty();
            for(i = 0 ;i < trialsLeft; i++){
                $("#trialsLeft").append("<img src='FruitNinjaFiles/images/heart.png' class='life'>")
            }
        }
        $("#fruit1").mouseover(function(){
            score++;
            $("#scorevalue").text(score);
//            document.getElementById("slicesound").play();
            $("#slicesound")[0].play;//html mei jaise tags ka order hai uska array leta hai isliye uska index matkab audio tag ke andar first link ka index pass kiya hai [0]
            stopAction();
            $("#fruit1").hide("explode", 500);
            //again start sending other fruit!
            setTimeout(startAction, 600);//startAction ke baad ()dene pe vo instantly chalu karta h 600 ka delay nai karta aur humko action stop karke fruit explode ke baad vapas dusre fruit ko laana hai isliye hum timeout se action ko delay dete hai
        });
        function startAction(){
            $("#fruit1").show();
            chooseFruit();
            $("#fruit1").css({
                'left':Math.round(Math.random() * 550),
                'top':-60,
            });
            step =1 + Math.round(Math.random() * 5);
            action = setInterval(function(){
                $("#fruit1").css("top",$("#fruit1").position().top + step);
                if($("#fruit1").position().top > $("#fruitsContainer").height()){
                    //check if trials are left or no
                    if(trialsLeft > 1){
                        //choose fruits
                        //BUG may come;
                    chooseFruit();
                    $("#fruit1").css({
                       'left':Math.round(Math.random * 550),
                        'top':-60, 
                    });
                step =1 + Math.round(Math.random() * 5);
                trialsLeft--;
                addHearts();
                    }
                    
               
                else{
                    //game over
                    playing = false;
                    $("#startreset").text("Start Game");
                    $("#gameOver").show();
                    $("#gameOver").html("<p>Game Over!</p><p>Your score is "+score+"</p>");
                    $("#trialsLeft").hide();
                    $("#scorevalue").text("");
                    stopAction();
                 }
                }
            },10);
        }
         function chooseFruit(){
            $("#fruit1").attr("src",'FruitNinjaFiles/images/'+fruits[Math.round(Math.random()*(fruits.length-1))]+'.png');//attr ke andar src aur file location dena hai 
        }
        function stopAction(){
            clearInterval(action);
        }
    });