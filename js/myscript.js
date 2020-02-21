$( document ).ready(function() {
    var img = [];
    var cid=[];
    var api_url = "https://api.thecatapi.com/v1/images/search";
    //this for to get id 
       for (var i = 0; i <=11 ; i++) {
         $.ajax({
             type: "GET",
             url: api_url,
             async: false,
             success: function(result){
                img.push(result['0'].url);
                cid.push(result['0'].id);
             }//end function
          });//end  ajax 
       }//end for 

       // for gallery image 
  var text = "";
  var i;
  for (i = 0; i <=11; i++) {
    text += "<div class='card left mt-4 col-xs-4 ' style='width: 25%;'>" + 
           "<img src='" + img[i] + "' class='card-img-top width='250px' height='250px'>" +
               "<div class='card-body'>"+
                   "<h5 class='card-text'> Cat ID is : "+ cid[i] + "</h5>"+"</div>"+"</div>"
  }
  document.getElementById("catphoto").innerHTML = text;
});