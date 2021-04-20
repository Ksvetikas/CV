"use strict";

function listCreate(action) {

let dates = [];

dates[0] = "2015.08 - 2021.01";
dates[1] = "2015.03 - 2015.08";
dates[2] = "2014.02 - 2014.11";
dates[3] = "2013.09 - 2014.01";
dates[4] = "2012.08 - 2013.06";

let places = [];

places[0] = "5 metai 4 mėnesiai UAB Tamsta.";
places[1] = "5 mėnesiai Victoria gym.";
places[2] = "9 mėnesiai Emplonet.";
places[3] = "4 mėnesiai Conmusica.";
places[4] = "10 mėnesių UAB Balticsofa.";

let positions = [];

positions[0] = "Pardavėjas- konsultantas, sandėlininkas.";
positions[1] = "Baseino prižiūrėtojas.";
positions[2] = "Gelbėtojo asistentas.";
positions[3] = "Mušamųjų mokytojas.";
positions[4] = "Minkštų baldų apmušėjas.";

let descriptions = [];

descriptions[0] = "Buvau atsakingas už klientų aptarnavimą ir konsultavimą, internetinės parduotuvės priežiūrą, darbą kasos aparatu, skambučių priėmimą, prekybos salės priežiūrą ir tvarkos palaikymą, sandėlio priežiūrą ir tvarkos palaikymą, siuntų paruošimą siuntimui ir jų priėmimą, prekių vežimą į kitus filialus, atliekų tvarkymą.";
descriptions[1] = "Buvau atsakingas už plaukimo baseine esančių žmonių saugumą, baseino ir pirčių tvarką, bei įrangos priežiūrą.";
descriptions[2] = "Dirbdamas gelbėtojo asistentu Vichy vandens parke buvau atsakingas už žmonių srautų valdymą, bei tvarkos ir saugumo taisyklių laikymąsi leidžiantis vandens parko atrakcionais. Palikau šį darbą dėl mažo darbo valandų skaičiaus.";
descriptions[3] = "Dirbdamas mušamųjų mokytoju mokiau vaikus groti mušamaisiais instrumentais, skaityti natas, rinkau ir paruošiau mokymo medžiagą, palaikiau tvarką kabinete. Darbą palikau dėl mažo darbo užmokesčio.";
descriptions[4] = "Darbe buvau atsakingas už kokybišką minkštų baldų apmušimą, baldų taisymą, tvarkos darbo vietoje palaikymą. Darbą palikau dėl sveikatos problemų, bei galimybės dirbti pagal įgytą specialybę.";


  if (action === 1) {

    const listContainer = document.getElementsByClassName('exp-container')[0];

    for (let i = 0; i < 5; i++) {

      const ul = document.createElement('ul');
      listContainer.appendChild(ul);

      const date = document.createElement('li');
      date.innerText = dates[i];
      ul.appendChild(date);

      const place = document.createElement('li');
      place.innerText = places[i];
      ul.appendChild(place);

      const position = document.createElement('li');
      position.innerText = positions[i];
      ul.appendChild(position);

      const description = document.createElement('div');
      description.innerText = descriptions[i];
      listContainer.appendChild(description);
    }

  }else {

      const listContainer = document.getElementsByClassName('exp-container');
      listContainer[0].querySelectorAll('*').forEach(n => n.remove());
  }
}


let action = 1;

const button = document.getElementsByClassName('exp');

  button[0].addEventListener("click", function() {

    if(action == 1 ) {
      listCreate(action);
      action = 2;
    }else {
      listCreate(action);
      action = 1;
    }
  });
