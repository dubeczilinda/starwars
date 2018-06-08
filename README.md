# Pótvizsga gyakorlati feladat

Feladatotként egy mongodb-s adatbázisban kell Starwars űrhajók adatait tárolni.
Az űrhajókhoz tartozik egy _id_, és egy _id_ mező is.
Az _id_ az _Objectid_, az _id_ csak egy egyszerű sorszám.
Feladatod az adatbázist létrehozni, felhasználót hozzárendelni, befejezni a backand részt,
és egy Angular5 frontendet készíteni hozzá.

__Mindegyik feladatot TODO-ban találod meg.__

## Alapkövetelmények
* Az API javascript file-jainak 100%-ban meg kell felelnie a backend mappa gyökérkönyvtárában található .eslintrc-ben definiált konvencióknak.
* A projekt során tartsd szem előtt a Clean Code szabályait.

## Adatbázis
* Hozz létre egy mongodb adatbázist starwars néven, és benne egy collectiont ugyanígy starwars néven
* A config/database.js fileban található felhasználót hozd létre a megadott adatokkal, és adj neki írási olvasási jogosultságot az adatbázishoz
* A config/mongodatas filban található parancsot Robomongo-ba futtasd le, ezzel feltöltve az adatbázist.

## Controller
* A controller/starwars.controller.js fileban található függvényeket értelemszerűen fejtsd ki.

## Server
* Használd a helmet package-et
* Írd meg az adatbázishoz való kapcsolódás kódját
* Engedélyezd a Cross Origin requesteket a http://localhost:4200 címről
* Állítsd be a route/starwars.route.js fileban található route-ot használatra

## Frontend
* Írj egy Angular5 + Bootstrap 4 SPA alkalmazást, aminek a segítségével az adatbázis műveletek grafikusan ki lesznek vezetve. Tehát legyen egy grafikus felület, ahol ki tudod listázni az űrhajók adatai, le tudod kérni egy hajó specifikációját, törölni, és módosítani tudod őket.