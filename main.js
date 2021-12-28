// Declare list of 20 top-paid baseball players (from spotrac.com).
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
// Declare list of all 30 MLB teams in alphabetical order.
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

// Create function that accepts an array as a parameter and returns a random
// value from that array.
const randomElem = (array) => {
    const i = Math.floor(Math.random() * array.length);
    return array[i];
}

// Choose random player.
const player = randomElem(players);
// Choose random team.
const team1 = randomElem(teams);
// Choose random team that was not already chosen.
const teams2 = teams.filter(team => team !== team1);
const team2 = randomElem(teams2);

console.log(`BREAKING NEWS: ${player} has been traded from the ${team1} to the ${team2}.`);