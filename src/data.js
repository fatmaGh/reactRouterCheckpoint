import {v4 as uuidv4} from 'uuid'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'
import img6 from './images/img6.jpg'
import img7 from './images/img7.jpg'
import img8 from './images/img8.jpg'

export const List = [
    {
        id: uuidv4(),
        title: "The age of Adaline",
        description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        posterURL: img1,
        rating: 3,
        trailer:"https://www.youtube.com/embed/6hB3S9bIaco"
    },
    {
        id: uuidv4(),
        title: "The Jocker",
        description: "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
        posterURL: img2,
        rating: 5,
        trailer: "https://www.imdb.com/video/vi3565864217/?playlistId=tt1630029&ref_=tt_ov_vi",
    },
    {
        id: uuidv4(),
        title: "Inception",
        description: "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
        posterURL: img3,
        rating: 5,
        trailer:"https://www.youtube.com/embed/9O1Iy9od7-A"
    },
    {
        id: uuidv4(),
        title: "The Lord Of The Rings",
        description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        posterURL: img4,
        rating: 4,
        trailer:"https://www.youtube.com/embed/wrcaivEjWCo"
    },
    {
        id: uuidv4(),
        title: "12 Hommes en colère",
        description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
        posterURL: img5,
        rating: 4,
        trailer:"https://www.youtube.com/embed/O2EmgMNbR7U"
    },
    {
        id: uuidv4(),
        title: "La liste de Schindler",
        description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
        posterURL: img6,
        rating: 4,
        trailer:"https://www.youtube.com/embed/ONWtyxzl-GE"
    },
    {
        id: uuidv4(),
        title: " Le Seigneur des anneaux : Le Retour du roi",
        description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
        posterURL: img7,
        rating: 4,
        trailer:"https://www.youtube.com/embed/8R8s5dLteWw"
    },
    {
        id: uuidv4(),
        title: " Pulp Fiction",
        description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        posterURL: img8,
        rating: 4,
        trailer:"https://www.youtube.com/embed/s7EdQ4FqbhY"
    },
];