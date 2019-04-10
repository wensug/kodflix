import cover_1 from './gallery/images/captainamerica.jpg'
import cover_2 from './gallery/images/sing.jpg'
import cover_3 from './gallery/images/drstrange.jpg'
import cover_4 from './gallery/images/exmachina.jpg'
import cover_5 from './gallery/images/logan.jpg'
import cover_6 from './gallery/images/passengers.jpg'

export default function getShows() {
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