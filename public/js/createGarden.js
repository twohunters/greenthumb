// $('.dropdown-menu').each(function(e){
// $(function(){

//     $(".dropdown-menu").on('click', 'li a', function(){
//       $(".btn:first-child").text($(this).text());
//       $(".btn:first-child").val($(this).text());
//    });

// });
// var selected = $('.dropdown-menu : selected').text()

// })
$(document).ready( function() {
    $('.dropdown-toggle').dropdown("toggle");
    });


$(".dropdown-menu").append(`<a class="dropdown-item" href="#">Tomato</a>
<a class="dropdown-item" href="#">Lettuce</a>
<a class="dropdown-item" href="#">Kale</a>
<a class="dropdown-item" href="#">Potato</a>
<a class="dropdown-item" href="#">Jalapeno</a>
<a class="dropdown-item" href="#">Rosemary</a>
<a class="dropdown-item" href="#">Thyme</a>
<a class="dropdown-item" href="#">Beet</a>
<a class="dropdown-item" href="#">Eggplant</a>
<a class="dropdown-item" href="#">Mint</a>
<a class="dropdown-item" href="#">Artichoke</a>
<a class="dropdown-item" href="#">Cabbage</a>
<a class="dropdown-item" href="#">Cauliflower</a>
<a class="dropdown-item" href="#">Corn</a>
<a class="dropdown-item" href="#">Zucchini</a>
<a class="dropdown-item" href="#">Spahetti Squash</a>
<a class="dropdown-item" href="#">Garlic</a>
<a class="dropdown-item" href="#">Pumpkin</a>
<a class="dropdown-item" href="#">Blueberry</a>
<a class="dropdown-item" href="#">Argula</a>`)

 $(".dropdown-item").click(function () {
        var selText = $(this).text();
        $('main').append( `<div id="a" class="card col-sm-3 " style="width: 18rem;">
        <div class="card-body">
            <h3>{${selText}</h3>
            </div>
            </div>)`
    );
})


    