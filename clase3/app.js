const zodiac = require('zodiac-signs')(); // módulo de tercero
const fs = require('fs');       // Módulo nativo

let participantes = [   // módulos propios
    require('./matias_vieira.js'),
    require('./pablo_mieles.js'),
    require('./johan_ledezma.js'),
    require ('./luciana_pantaleon'),
    require('./andres_lopera.js'),
    require ('./Beatriz_Sanchez'),
    require('./esteban_garcia.js'),
    require('./mercedes_solis.js'),
    require('./jeanpaul_contreras'),
    require('./mansilla_ana.js'),
    require('./javier_ramirez.js'),
    require('./guillermo_fontana.js')
    
];


for (let i = 0; i < participantes.length; i++) {
    const participante = participantes[i];
    let signo = zodiac.getSignByDate(participante[3])
    console.log('Hola, soy ' + participante[0] + ', disfruto ' + participante[1] + ' y soy de ' + participante[2] + ' y soy de ' + signo.name + signo.symbol );
}

