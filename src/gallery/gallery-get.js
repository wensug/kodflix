import cover_1 from './images/captainamerica.jpg'
import cover_2 from './images/sing.jpg'
import cover_3 from './images/drstrange.jpg'
import cover_4 from './images/exmachina.jpg'
import cover_5 from './images/logan.jpg'
import cover_6 from './images/passengers.jpg'

export default function getGallery() {
    return [ {
        id: 'captain-america',
        name: 'Captain America',
        cover: cover_1
    }, {
        id: 'sing',
        name: 'Sing',
        cover: cover_2
    }, {
        id: 'dr-strange',
        name: 'Dr Strange',
        cover: cover_3
    }, {
        id: 'ex-machina',
        name: 'Exmachina',
        cover: cover_4
    }, {
        id: 'logan',
        name: 'Logan',
        cover: cover_5
    }, {
        id: 'passengers',
        name:'Passengers',
        cover: cover_6
    }];
}