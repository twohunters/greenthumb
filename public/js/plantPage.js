
var plantNameEl = document.getElementById("plant-name");
var recipeList = document.getElementById('recipes');


var plantName = plantNameEl.textContent;
console.log(plantName);
var getRecipes = (plantName) => {
const apiUrl = 'http://www.recipepuppy.com/api/?i='+plantName
console.log(apiUrl);
fetch(apiUrl)
.then(function(response){
    return response.json();
})
.then(function (data) {
    console.log(data)
    for(var i=0; i<3; i++){
        var recipeLinkEl = document.createElement('a');
        recipeLinkEl.setAttribute('href', data.results[i].href);
        recipeLinkEl.setAttribute('target', '_blank');
        var titleEl = document.createElement('span');
        titleEl.textContent = data.results[i].title;
        var br = document.createElement('br');
        recipeLinkEl.appendChild(titleEl);
        recipeLinkEl.appendChild(br);
        recipeList.appendChild(recipeLinkEl);
    }
})
};

$('#back').on('click',function(){
    document.location.replace('/userpage')
})

