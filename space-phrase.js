var rockets = ['Ariane', 'Lambda', 'Soyuz', 'Vostok', 'Dnepr', 'Proton', 'Zenit', 'Atlas', 'Falcon', 'Juno', 'Redstone', 'Saturn', 'Delta', 'Titan', 'Vanguard', 'BlackBrant', 'Aerobee', 'Arcas'];
var humans = ['Tsiolkovsky', 'Korolev', 'Goddard', 'Hopper', 'Hamilton', 'Lucid', 'Ride', 'Jemison', 'Tereshkova', 'Armstrong', 'Aldrin', 'Young', 'Bolden', 'Gagarin', 'Duke', 'Shepard', 'Lovell', 'Hadfield', 'Grissom'];
var missions = ['Mercury', 'Gemini', 'Apollo', 'ISS', 'Curiosity', 'Opportunity', 'Discovery', 'Spirit', 'Voyager', 'Cassini', 'Rosetta', 'Hayabusa', 'Juno', 'Endeavour', 'Columbia', 'Stardust', 'Kepler', 'Hubble'];

var phrase;

phrase = function(config) {
    var p = ['','',''], n;
    var i = p.length, temp, i_rand;

    // Random rocket, human, mission
    p[0] = rockets[Math.round(Math.random() * (rockets.length - 1))];
    p[1] = humans[Math.round(Math.random() * (rockets.length - 1))];
    p[2] = missions[Math.round(Math.random() * (rockets.length - 1))];
    n = Math.round(Math.random() * 42);

    // Shuffle
    while (0 !== i) {
        i_rand = Math.floor(Math.random() * i);
        i--;
        temp = p[i];
        p[i] = p[i_rand];
        p[i_rand] = temp;
    };

    // Build
    return p[0]+config.deliminator+p[1]+config.deliminator+p[2]+config.deliminator+n;
};
