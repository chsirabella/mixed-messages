const players = [
    'Max Scherzer',
    'Mike Trout',
    'Anthony Rendon',
    'Jacob deGrom',
    'Gerrit Cole',
    'Nolan Arenado',
    'Stephen Strasburg',
    'Francisco Lindor',
    'Corey Seager',
    'Manny Machado',
    'Miguel Cabrera',
    'David Price',
    'Chris Sale',
    'George Springer',
    'Giancarlo Stanton',
    'Jose Altuve',
    'Justin Upton',
    'Bryce Harper',
    'Christian Yelich',
    'Paul Goldschmidt',
];
const teams = [
    'Angels',
    'Astros',
    'Athletics',
    'Blue Jays',
    'Braves',
    'Brewers',
    'Cardinals',
    'Cubs',
    'Diamondbacks',
    'Dodgers',
    'Giants',
    'Guardians',
    'Mariners',
    'Marlins',
    'Mets',
    'Nationals',
    'Orioles',
    'Padres',
    'Pirates',
    'Phillies',
    'Rangers',
    'Rays',
    'Reds',
    'Red Sox',
    'Rockies',
    'Royals',
    'Tigers',
    'Twins',
    'White Sox',
    'Yankees',
];

const randomElem = (array) => {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

const player = randomElem(players);
const team1 = randomElem(teams);

const teams2 = teams.filter(team => team !== team1);
const team2 = randomElem(teams2);

console.log(`Breaking news: ${player} has been traded from the ${team1} to the ${team2}.`);