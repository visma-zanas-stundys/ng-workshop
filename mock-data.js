//@ts-check

module.exports = () => {
  return {
    restaurants: makeMockRestaurants(),
  };
};

/** @returns {import('./src/app/interfaces/restaurant').Restaurant[]} */
function makeMockRestaurants() {
  return [
    {
      id: 1,
      imageUrl: "https://source.unsplash.com/collection/345703/900x900?v=1",
      name: "Jammi Kebabai",
      address: "Stoties g. 22",
      distanceInKm: 4.5,
      rating: 7.5,
      description:
        "Viskas prasidėjo 2006 m. balandį. Pirmasis duris atvėrė vilniečiams legendiniu tapęs „Pilaitės kebabų kioskelis“. Praėjus 15-ai metų, Lietuvoje veikia net 14 (o Vilniuje - 12) Jammi greito maisto restoranų. Dauguma jų dirba visą parą",
    },
    {
      id: 2,
      imageUrl: "https://source.unsplash.com/collection/345703/900x900?v=2",
      name: "Čili Pica",
      address: "Vikingų g. 4",
      distanceInKm: 1,
      rating: 4.5,
      discount: "-20%",
      description:
        "Kaskart pasirinkdami su kuo bendradarbiaujame, ką patiekiame mūsų svečiams ir kokias vertybes atstovaujame, įvertiname, kokią įtaką kiekvienas pasirinkimas daro mūsų aplinkai. Atsakomybė gamtai ir jos gerovei – svarbi mūsų vizijos dalis.",
    },
    {
      id: 3,
      imageUrl: "https://source.unsplash.com/collection/345703/900x900?v=3",
      name: "Grill London",
      address: "Vilniaus g. 7",
      distanceInKm: 2.5,
      rating: 9.5,
      discount: "Nemokamas atvežimas",
      description:
        "Didelį svečių susidomėjimą paskatino pirmasis restoranas, nudžiuginęs kauniečius išskirtine meniu koncepcija, nepriekaištingo skonio patiekalais bei autentišku interjeru, primenančiu XIXa. Londono stoties architektūrą, kas puikiai atspindėjo ,,Grill London“ koncepciją. Restoranai – patrauklūs tiek šeimoms, tiek šiuolaikiniam jaunimui. Dėl jaukios, stilingos aplinkos bei prieinamų kainų ,,Grill London“ tapo viena populiariausių vietų, o augantis lankytojų skaičius paskatino restoranų plėtrą Kaune, Vilniuje, Šiauliuose ir Klaipėdoje!",
    },
    {
      id: 4,
      imageUrl: "https://source.unsplash.com/collection/345703/900x900?v=3",
      name: "McDonalds",
      address: "Gedimino pr. 5",
      distanceInKm: 6.5,
      rating: 9.5,
      description:
        "Šiandien vieno stipriausių prekių ženklų restoranai veikia daugiau kaip 36 tūkst. vietovių. 119 šalių McDonald’s dirba apie 1,9 mln. žmonių.\n\n1996 m. McDonald’s įžengė ir į Lietuvą - pirmasis restoranas buvo atidarytas Vilniuje. Šiuo metu Vilniuje, Kaune, Klaipėdoje, Šiauliuose ir Marijampolėje iš viso veikia 17 McDonald’s restoranų, 13-oje iš jų įdiegta McDrive™ paslauga, o 8-iuose - McCafé™ kavinės. Lietuvoje daugiau nei 1000 McDonald’s darbuotojų per dieną aptarnauja apie 24 tūkst. lankytojų.",
    },
  ];
}
