$(document).ready(function(){
    console.log("js is done");
    var myApi = "https://flynn.boolean.careers/exercises/api/random/int";
    var boxes = $(".box");
    var click= false;

    boxes.click(function(){
        var thisBtn = $(this);
        thisBtn.removeClass("green yellow");
        if(thisBtn.text()== ""){
            $.ajax({
                url : myApi,
                method: "GET",
    
                success: function(data){
                    var boxNumber = data.response;
                    if(boxNumber > 5){
                        thisBtn.addClass("green");
                    }
                    else{
                        thisBtn.addClass("yell")
                    }
                    thisBtn.text(boxNumber);
                },
    
                error: function(){
                    console.log("oh no:(");
                    
                }
            })
        } else{
            thisBtn.removeClass("green").removeClass("yell");
            thisBtn.text("");
        }

       
    })
    



})