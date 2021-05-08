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



$("#plant_a a").click(function () {
    var selText = $(this).text();
    $("#planta").text($(this).text())
    $('main').append( `<div id="a" class="card col-sm-3 " style="width: 18rem;">
    <div id="a" class="card-body">
        <h3>${selText}</h3>
        </div>
        </div>`)
    $("#a").attr('id', $(this).text())
})
$("#plant_b a").click(function () {
    $("#plantb").text($(this).text())
    $("#plantb").attr('id', $(this).text())
})
$("#plant_c a").click(function () {
    $("#plantc").text($(this).text())
})
$("#plant_d a").click(function () {
    $("#plantd").text($(this).text())
})
$("#plant_e a").click(function () {
    $("#plante").text($(this).text())
})
$("#plant_f a").click(function () {
    $("#plantf").text($(this).text())
})
$("#plant_g a").click(function () {
    $("#plantg").text($(this).text())
})
$("#plant_h a").click(function () {
    $("#planth").text($(this).text())
})
// $(".dropdown-item").click(function () {
//     var selText = $(this).text();
//     $('main').append( `<div id="a" class="card col-sm-3 " style="width: 18rem;">
//     <div class="card-body">
//         <h3>${selText}</h3>
//         </div>
//         </div>`
// );
// })

async function createGarden(e){
    e.preventDefault();
const garden_name = document.getElementById('#garden_name').value.trim()
const plant_a = document.getElementById('#planta').value.trim();
const plant_b = document.getElementById('#plantb').value.trim();
const plant_c = document.getElementById('#plantc').value.trim();
const plant_d = document.getElementById('#plantd').value.trim();
const plant_e = document.getElementById('#plante').value.trim();
const plant_f = document.getElementById('#plantf').value.trim();
const plant_g = document.getElementById('#plantg').value.trim();
const plant_h = document.getElementById('#planth').value.trim();



if (garden_name && plant_a && plant_b && plant_c && plant_d && plant_e && plant_f && plant_g && plant_h ){
    const response = await fetch ('/api/users',{
        method: 'post',
        body: JSON.stringify({
            garden_name: garden_name,
            plant_a: plant_a,
            plant_: plant_b,
            plant_c: plant_c,
            plant_d: plant_d,
            plant_e: plant_e,
            plant_f: plant_f,
            plant_g: plant_g,
            plant_h: plant_h,

        }), headers: {'Content-Type':'application/json'}
     }); if (response.ok) {
        document.location.replace('/creategarden')
    }else {
       
        alert(response.statusText);
}
}
}