import recorriendo from './images/recorriendo.jpg';
import anecdotas from './images/anecdotas.jpg';
import caricia from './images/caricia.png';
import visita from './images/visita.png';
import antipodas from './images/antipodas.jpg';
import caminoCorto from './images/caminoCorto.jpg';
import caminosInvisibles from './images/caminosInvisibles.jpg';
import ebano from './images/ebano.jpg';
import montanasLuna from './images/montanasLuna.jpg';
import trazos from './images/trazos.jpg';
import vagabundeando from './images/vagabundeando.jpg';
import pelosLacios from './images/pelosLacios.jpg';

import anecdotasInfantiles from './ebooks/anecdotasInfantiles.pdf'
import recorriendoSudamerica from './ebooks/recorriendoSudamerica.pdf'
import visitaOficial from './ebooks/visitaOficial.pdf'
import cariciaDivina from './ebooks/cariciaDivina.pdf'

import BillBryson from './images/BillBryson.jpg';
import BruceChatwin from './images/BruceChatwin.jpg';
import Burton from './images/Burton.jpg';
import DanLande from './images/DanLande.jpg';
import JuanVillarino from './images/JuanVillarino.jpg';
import Kapuscinski from './images/Kapuscinski.jpg';
import LauraJuan from './images/LauraJuan.jpg';
import NicoBonder from './images/NicoBonder.jpg';
import ManuelLeguineche from './images/ManuelLeguineche.jpg';

const products = [
    {
        id: 1,
        name: "Recorriendo Sudamérica",
        author:"Nico Bonder",
        regionTrip: "Sudamérica",
        price: "5",
        rating: 4,
        image: recorriendo,
        description: "Te cuento lo mejor (y lo peor) que vivimos durante nuestro recorrido de casi 31.000 kilómetros por 10 países de Sudamérica durante 195 días, y aunque en un viaje, como en la vida, no todo es felicidad y buenos momentos, vas a poder vivir la emoción que nosotros sentíamos cada vez que nuestros niños interiores corrían libres delante nuestro.",
        file: <a href={recorriendoSudamerica} 
        download="recorriendoSudamerica.pdf">Descarga el libro</a>,
        freeSample: <a href={recorriendoSudamerica} 
        download="recorriendoSudamerica.pdf">Hacé clic y lee las primeras páginas</a>,
        authorImg: NicoBonder,
        authorDescription: "Nico escribe cuentos hace más de 15 años y cuando comenzó a viajar sintió la necesidad de narrar las historias que atravezaba en sus viajes. Así nacieron sus primeras crónicas de viajes, en las que muestra los hechos más interesantes del viaje que hizo junto a su pareja Lu por Sudamérica. Sus escritos son directos, rápidos y cargados de acciones.",
        pages: "160",
        language: "Español",
        published: "15/05/2021",
    },
    {
        id: 2,
        name: "Visita Oficial",
        author:"Nico Bonder",
        regionTrip: "Australia",
        price: "5",
        rating: 5,
        image: visita,
        description: "Como habitante del interior del interior de Argentina, me resulta casi inevitable pensar mis historias en pequeños pueblos, donde no suele haber mucho para hacer, entonces vemos personajes aburridos, buscando la diversión en pequeñas maldades, con fantasías de bajo vuelo. Por eso digo que Visita oficial es una colección de 32 cuentos con historias que están ambientadas en pequeños pueblos y son abundantes de personajes que vas a odiar.",
        file: <a href={visitaOficial} 
        download="visitaOficial.pdf">Descarga el libro</a>,
        freeSample: <a href={visitaOficial} 
        download="visitaOficial.pdf">Hacé clic y lee las primeras páginas</a>,
        authorImg: NicoBonder,
        authorDescription: "Nico escribe cuentos hace más de 15 años y cuando comenzó a viajar sintió la necesidad de narrar las historias que atravezaba en sus viajes. Así nacieron sus primeras crónicas de viajes, en las que muestra los hechos más interesantes del viaje que hizo junto a su pareja Lu por Sudamérica. Sus escritos son directos, rápidos y cargados de acciones.",
        pages: "150",
        language: "Español",
        published: "15/05/2021",
    },
    {
        id: 3,
        name: "Anécdotas infantiles",
        author:"Nico Bonder",
        regionTrip: "Europa",
        price: "4",
        rating: 4,
        image: anecdotas,
        description: "Colección de cuentos que tienen un camino en común: las anécdotas vividas por una persona desde que inicia su infancia hasta que esta se termina. ¿Cómo saber cuándo se acaba una etapa de la vida? Transitando estas historias vas a descubrir que, como en la tuya, en cualquier vida hay tiempos felices, épocas de descubrimiento y, para algunos, también existen momentos trágicos. ¿Cuántas historias se viven en una vida? ¿Cuántos traumas nos llevamos de la infancia para el resto de la vida?",
        file: <a href={anecdotasInfantiles} 
        download="anecdotasInfantiles.pdf">Descarga el libro</a>,
        freeSample: <a href={anecdotasInfantiles} 
        download="anecdotasInfantiles.pdf">Hacé clic y lee las primeras páginas</a>,
        authorImg: NicoBonder,
        authorDescription: "Nico escribe cuentos hace más de 15 años y cuando comenzó a viajar sintió la necesidad de narrar las historias que atravezaba en sus viajes. Así nacieron sus primeras crónicas de viajes, en las que muestra los hechos más interesantes del viaje que hizo junto a su pareja Lu por Sudamérica. Sus escritos son directos, rápidos y cargados de acciones.",
        pages: "110",
        language: "Español",
        published: "15/05/2021",
    },
    {
        id: 4,
        name: "Una caricia divina",
        author:"Nico Bonder",
        regionTrip: "Argentina",
        price: "2",
        rating: 4,
        image: caricia,
        description: "Cada cuento tiene protagonistas y miradas diferentes. En algunos encontramos una mirada desde adentro de la cancha, en otros se parte de los ojos de un chico que sueña con debutar en la primera de un club de barrio. Y porque el deporte es sagrado para algunos, conoceremos el Génesis futbolero. Otras voces lo rozan solo tangencialmente, mostrando lo que provoca el fanatismo, o la historia de héroes impensados que salvan una ciudad desde la torre de transmisión de una cancha. La historia más trágica está basada en una anécdota real que le contó un paciente a mi padre. Si sos fanático del deporte este libro es ideal para vos, y también si sos de las personas que se asombran y disfrutan con delirios sencillos.",
        file: <a href={cariciaDivina} 
        download="cariciaDivina.pdf">Descarga el libro</a>,
        freeSample: <a href={cariciaDivina} 
        download="cariciaDivina.pdf">Hacé clic y lee las primeras páginas</a>,
        authorImg: NicoBonder,
        authorDescription: "Nico escribe cuentos hace más de 15 años y cuando comenzó a viajar sintió la necesidad de narrar las historias que atravezaba en sus viajes. Así nacieron sus primeras crónicas de viajes, en las que muestra los hechos más interesantes del viaje que hizo junto a su pareja Lu por Sudamérica. Sus escritos son directos, rápidos y cargados de acciones.",
        pages: "160",
        language: "Español",
        published: "15/05/2021",
    },
    {
        id: 5,
        name: "Viaja a la tierra de los pelos lacios",
        author:"Dan Lande",
        regionTrip: "Sudeste Asiático",
        price: "5",
        rating: 5,
        image: pelosLacios,
        description: "Viaje a la Tierra de los Pelos Lacios, cuenta la última parte de una vuelta al mundo. El libro recoge crónicas de mi paso por Mongolia, China, Vietnam, Camboya, Tailandia, Malasia, Singapur, Filipinas, Sri Lanka y la India. En esta travesía redefino el concepto de exploración y juego con una perspectiva antigua y romántica del viajero solitario. Con una mirada fresca y llena de humor, relato un universo que por momentos parece rozar lo irreal.",
        authorImg: DanLande,
        authorDescription: "Dan es especialista en creatividad y eso se refleja en sus viajes y en su escritura. Su capacidad para romper las barreras en grupos de desconocidos y meterse en situaciones ridículas hacen que sus historias sean desopilantes. Conoce cómo crear ritmo en sus relatos y hace que sus lectores se mantengan atrapados página tras página.",
        pages: "155",
        language: "Español",
    },
    {
        id: 6,
        name: "Caminos Invisibles",
        author:"Laura Lazzarino, Juan Pablo Villarino",
        regionTrip: "Sudamérica",
        price: "3",
        rating: 4,
        image: caminosInvisibles,
        description: "La historia de dos nómadas que decidieron dejarlo todo para vivir viajando. Respuesta larga: seguí leyendo. El libro relata lo que fue el desafío de abordar el alma del continente región por región, pueblo a pueblo, a lo largo de rutas secundarias que no aparecían en ningún mapa. Al escribir el libro, tenía la constante sensación de que muchos episodios habían sido irreales.",
        authorImg: LauraJuan,
        authorDescription: "Luara y Juan hicieron un viaje a dedo por Sudamérica y escribieron juntos este libro. Cada uno escribió los capítulos que más los había interpelado y cada uno con sus estilos bien diferentes nos hacen sentir lo profundo de nuestras tierras.",
        pages: "160",
        language: "Español",
        published: "15/05/2021",
    },
    {
        id: 7,
        name: "Las montañas de la Luna",
        author:"Richard Burton",
        regionTrip: "África",
        price: "5",
        rating: 3,
        image: montanasLuna,
        description: "El libro “Las Montañas de la Luna. En busca de las fuentes del Nilo” recoge un resumen de los escritos que dejó Sir Richard Burton a su vuelta de una de esas expediciones al centro de África en busca del nacimiento del mítico río.",
        authorImg: Burton,
        authorDescription: "Burton es uno de los viajeros y escritores más legendarios.",
        pages: "170",
        language: "Español",
        published: "15/05/2021",
    },
    {
        id: 8,
        name: "El camino más corto",
        author:"Manuel Leguineche",
        regionTrip: "Mundo",
        price: "4",
        rating: 5,
        image: caminoCorto,
        description: "Manu Leguineche tenía veintitrés años cuando logró unirse a una insólita expedición para recorrer el mundo en coche. Era el año 1965 y todo estaba cambiando. Este libro, escrito años después y convertido en un clásico, recuerda aquel viaje.",
        authorImg: ManuelLeguineche,
        authorDescription: "Manuel fue un periodista español que para escribir este libro se unió a 3 norteamericanos y con gran humor nos cuenta las increíbles aventuras que vivieron.",
        pages: "168",
        language: "Español",
    },
    {
        id: 9,
        name: "Vagabundeando en el eje del mal",
        author:"Juan Pablo Villarino",
        regionTrip: "Asia",
        price: "4",
        rating: 5,
        image: vagabundeando,
        description: "Este es “Vagabundeando en el Eje del Mal – Un viaje a dedo en Irak, Irán y Afganistán”, mi primer libro editado tras 10 años de libritos artesanales. La historia transcurre en Medio Oriente, durante la primera etapa de mi vuelta al mundo a dedo. La idea de cruzar Irak, Irán y Afganistán, Turquía, Siria y Egipto haciendo autostop emergió como una cruzada para demostrar la solidaridad de sus habitantes y desmantelar los estereotipos mediáticos montados por el establishment para justificar sus guerras. También, es un compendio de eventos absurdos, desde dormir en un campamento beduino hasta tomar el té en un campo minado.",
        authorImg: JuanVillarino,
        authorDescription: "Juan se cansó de su vida universitaria europea y comenzó a caminar y a hacer dedo, confiando en la humanidad y con el objetivo de contar la hospitalidad que reina en cada sociedad.",
        pages: "160",
        language: "Español",
        published: "15/05/2021",
    },
    {
        id: 10,
        name: "Ébano",
        author:"Ryszard Kapuscinski",
        regionTrip: "Mundo",
        price: "5",
        rating: 4,
        image: ebano,
        description: "En Ébano, Kapuściński se ha sumergido en el continente africano, rehuyendo las paradas obligadas, los estereotipos y los lugares comunes. Vive en las casas de los arrabales más pobres, plagadas de cucarachas y aplastadas por el calor; enferma de malaria cerebral; corre peligro de muerte a manos de un guerrillero; tiene miedo y sedesespera.",
        authorImg: Kapuscinski,
        authorDescription: "El polaco es considerado el mejor cronistaen África y la contó como nadie.",
        pages: "180",
        language: "Español",
        published: "15/05/2021",
    },
    {
        id: 11,
        name: "Trazos de la canción",
        author:"Bruce Chatwin",
        regionTrip: "Australia",
        price: "3",
        rating: 4,
        image: trazos,
        description: "Una colosal aventura real a través del paisaje australiano. Para un aborigen australiano, su país es como una inmensa partitura musical: allí donde pisa puede cantar canciones inmemoriales que hacen surgir el paisaje, otorgan derechos territoriales, posibilitan el trueque simbólico y permiten expresar el alma del intérprete.",
        authorImg: BruceChatwin,
        authorDescription: "bla bla bla bla.",
        pages: "120",
        language: "Español",
        published: "15/05/2021",
    },
    {
        id: 12,
        name: "En las antípodas",
        author:"Bill Bryson",
        regionTrip: "Australia",
        price: "3",
        rating: 3,
        image: antipodas,
        description: "Australia es mucho más que un enorme país. Y mucho más que la isla la más grande del mundo. Es un universo aparte. Árida, con una climatología extrema y una fauna atípica (y en muchos casos muy peligrosa), Australia también tiene gentes hospitalarias, ciudades muy modernas y otros muchos secretos por descubrir. ¿Cómo no enamorarse de un lugar fascinante que no se parece a ningún otro?",
        authorImg: BillBryson,
        authorDescription: "bla bla bla bla.",
        pages: "135",
        language: "Español",
        published: "15/05/2021",
    },
];

export default products;