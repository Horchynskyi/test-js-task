'use strict';
/**
 * Created by eugene on 07/21/17.
 */

var LIST = [
    {
        city: 'Lviv',
        population: '727968'
    },
    {
        city: 'Kyiv',
        population: '2906569'
    },
    {
        city: 'Paris',
        population: '2220445'
    },
    {
        city: 'Odesa',
        population: '1010848'
    },
    {
        city: 'Ternopil',
        population: '218022'
    },
    {
        city: 'Sidney',
        population: '3908643'
    }
];

//Horchynskyi
//List
{
//Назначаємо змінні, масив елементів з назвами міст та останній клікнутий елемент(для зручного видалення классу бз циклу)
let listCitys,
    lastClicked;
//Функція що при старт заповнює список містами з населенням більше 1 млн.
function addItemsToList(){
    for(let i=0; i<LIST.length;i++){
        if(LIST[i].population <= 1000000) continue;
        let li = document.createElement('li'),
            roundPopulation = +(LIST[i].population.slice(0,1)+'.'+LIST[i].population.slice(1));
        li.className = "list-item";
        li.innerHTML = `<span class="city">`+LIST[i].city+`</span>, населення `+roundPopulation.toFixed(1)+` млн.`;
        list.appendChild(li);
    }
    //Записуем елементи з містами
    listCitys = document.body.getElementsByClassName('city');
}
addItemsToList();
//Функція пошуку
function searchF(searchString){
    for(let i=0;i<listCitys.length;i++){
        listCitys[i].innerHTML.toLowerCase().indexOf(searchString.toLowerCase()) == -1 ? listCitys[i].parentNode.classList.add('hide') : listCitys[i].parentNode.classList.remove('hide');
    };
}
//При відпусканні клавіші запускаємо пошук
search.onkeyup = function(){
    searchF(this.value);
}
//Закриваэм/відкриваєм список
openList.onclick = function(){
    listBlock.classList.toggle('list-open');
};
//При кліці на елемент у списку(довелось використовувати делегування бо назва міста у <span>);
list.onclick = function(e){
    var target = e.target;
    while (target.tagName != 'UL') {
        if (target.className == "list-item") {
            openList.value = target.innerText;
            if(lastClicked) lastClicked.classList.remove('selected');
            target.classList.add('selected');
            lastClicked = target;
          return;
        }
        target = target.parentNode;
    }
}
}