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
        cover: cover_1,
        synopsis: `Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". 
            But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization.`
    }, {
        id: 'sing',
        name: 'Sing',
        cover: cover_2,
        synopsis: `In a city of humanoid animals, a hustling theatre impresario's attempt to save his theatre with a singing competition 
            becomes grander than he anticipates even as its finalists find that their lives will never be the same.`
    }, {
        id: 'dr-strange',
        name: 'Dr Strange',
        cover: cover_3,
        synopsis: `After a horrible car accident, brilliant neurosurgeon Stephen Strange must find a way and a cure to healing his hands. 
            His quest brings him to Kamar-Taj in Nepal where he studies under the Ancient One, who teaches him the ways of magic and alternate realities`
    }, {
        id: 'ex-machina',
        name: 'Exmachina',
        cover: cover_4,
        synopsis: `Caleb, an employee at a Google-like company, is selected to visit the home of the CEO, Nathan. But while there, 
            Nathan shows Caleb what he's been working on: Ava. She, the greatest achievement in the history of the human race.`
    }, {
        id: 'logan',
        name: 'Logan',
        cover: cover_5,
        synopsis: `In the near future, a weary Logan cares for an ailing Professor X at a remote outpost on the Mexican border. 
            His plan to hide from the outside world gets upended when he meets a young mutant who is very much like him. `
    }, {
        id: 'passengers',
        name:'Passengers',
        cover: cover_6,
        synopsis: `A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction 
            in its sleep chambers. As a result, two passengers are awakened 90 years early.`
    }];
}