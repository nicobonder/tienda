import recorriendo from './images/recorriendo.jpg';
import anecdotas from './images/anecdotas.jpg';
import caricia from './images/caricia.png';
import visita from './images/visita.png';

const products = [
    {
        id: 1,
        name: "Recorriendo Sudamérica",
        author:"Nico Bonder",
        regionTrip: "Sudamérica",
        price: "5",
        rating: 4,
        image: recorriendo,
        description: "Te cuento lo mejor (y lo peor) que vivimos durante nuestro recorrido de casi 31.000 kilómetros por 10 países de Sudamérica durante 195 días, y aunque en un viaje, como en la vida, no todo es felicidad y buenos momentos, vas a poder vivir la emoción que nosotros sentíamos cada vez que nuestros niños interiores corrían libres delante nuestro."
    },
    {
        id: 2,
        name: "Visita Oficial",
        author:"Nico Bonder",
        regionTrip: "Australia",
        price: "5",
        rating: 5,
        image: visita,
        description: "bla bla bla bla"
    },
    {
        id: 3,
        name: "Anécdotas infantiles",
        author:"Nico Bonder",
        regionTrip: "Europa",
        price: "4",
        rating: 4,
        image: anecdotas,
        description: "bla bla bla bla"
    },
    {
        id: 4,
        name: "Una caricia divina",
        author:"Nico Bonder",
        regionTrip: "Argentina",
        price: "2.50",
        rating: 4,
        image: caricia,
        description: "bla bla bla bla"
    },
    {
        id: 5,
        name: "Viaja a la tierra de los pelos lacios",
        author:"Dan Lande",
        regionTrip: "Sudeste Asiático",
        price: "5",
        rating: 5,
        image: caricia,
        description: "bla blal blalbbblbl"
    },
    {
        id: 6,
        name: "Caminos Invisibles",
        author:"Laura Lazzarino, Juan Pablo Villarino",
        regionTrip: "Sudamérica",
        price: "3",
        rating: 4,
        image: caricia,
        description: ""
    },
    {
        id: 7,
        name: "Los suicidas del fin del mundo",
        author:"Leila Guerriero",
        regionTrip: "Argentina",
        price: "5",
        rating: 5,
        image: caricia,
        description: "Argentina"
    },
    {
        id: 8,
        name: "Las montañas de la Luna",
        author:"Richard Burton",
        regionTrip: "África",
        price: "5",
        rating: 3,
        image: caricia,
        description: ""
    },
    {
        id: 9,
        name: "El camino más corto",
        author:"Manuel Leguineche",
        regionTrip: "Mundo",
        price: "4",
        rating: 5,
        image: caricia,
        description: ""
    },
];

export default products;