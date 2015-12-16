
$(document).ready(function(){
    $.get("https://api.foursquare.com/v2/venues/search" +
        "?client_id=" + "G2JPUG1LBT2PMO5K5P4J2ZWO20CVFX4MPMMYCQZ0HYZXHXIY "+
        "&client_secret=" + "G5ILB2R5QNNE3DDCN4TMDNIHGRZMGJWZZYROWURZ2UOJ4ZJM" +
        "&v=20151209" +
        "&near=nyc" +
        "&query=pizza",
        function(data) {
            // Callback code goes here. This gets executed after receiving data from the Foursquare API
           console.log(data['response']); 
            console.log(data['response']);
            
        });
  

    $('#submit'). click( function(e) {
        alert('sanity')
        
    });
});
 