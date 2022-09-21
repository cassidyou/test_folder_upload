$(function(){

   
 
    /*creates a tag and appends it to the tag container before the input element
    function createTag(tag){
         let category = '<div id="tag"> ' + 
        '<span class="tagText"> ' + tag +'</span>  ' +
         '<span id="close">&times;</span> '+
        '</div>'
    return $("#tagContainer input").before(category);
    }

    */
  function close(){
      $("#close").click(function(){
          $("#tag").hide();
      })
  }


    //creates a tag and appends it to the tag container before the input element
    function createTag(tag){
        let div = $("<div id='tag'></div>");
        let span = $(`<span>${tag}</span>`);
        var closeBtn = $("<button id='close'>&times;</button>");
        
         let category = div.append(span, closeBtn);
        $("#tagContainer input").before(category);

        close();
        
    }




    function addTag(){
     
        $("#tagContainer input").keyup(function(e){
         let tag = $("#tagContainer input").val();

            //when the enter key is pressed, call the createTag function
            if(e.key == "Enter"){
            //check if user input contains a comma and make an array of the input at every comma
            //call the createTag function on every array item
             if( $("#tagContainer input").val().includes(',')){
                let text = $("#tagContainer input").val().trim();
                let arr = text.split(",");
                arr.forEach((value) => {
                    let item = "";
                    item += value;
                    if(value != ''){
                        createTag(value);
                    }
                    $("#tagContainer input").val(""); 
                });
                
             }else{
                //if user input does not contain comma, call the createTag function
               if(tag != ""){
                createTag(tag);
               }
               
            $("#tagContainer input").val("");
            }
        }
     });
    
   }

 
 addTag();

});




