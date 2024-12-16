import { FaCarSide, FaCar, FaBolt, FaCogs, FaRoad } from "react-icons/fa";
const CarMakes =[
    {
        id: 1,
        name: 'Audi'
    },
    {
        id: 2,
        name: 'BMW'
    },
    {
        id: 3,
        name: 'Jaguar'
    },
    {
        id: 4,
        name: 'Ferarrai'
    }
]

const  Pricing =[
    {
        id: 1,
        amount: '1000000'
    },
    {
        id: 2,
        amount: '2000000'
    },
    {
        id: 3,
        amount: '3000000'
    },
    {
        id: 4,
        amount: '6000000'
    },
    {
        id: 5,
        amount: '8000000'
    },
    {
        id: 6,
        amount: '10000000'
    }
]

const carCategories = [
    {
      id: 1,
      name: "SUV",
      
      icon: '/xuv.png',
    },
    {
      id: 2,
      name: "Sedan",
      
      icon: "/sedan1.png",
    },
    {
      id: 3,
      name: "Hatchback",
      
      icon: "/hatchback.png",
    },
    {
      id: 4,
      name: "Convertible",
      
      icon: "/convertable.png",
    },
    {
      id: 5,
      name: "Electric",
      
      icon: "/electric.png",
    },
    {
        id: 6,
        name: "SW",
        
        icon: "/stationwagon.png",
      },
      {
        id: 7,
        name: "Mini Van",
        
        icon: "/minivan.png",
      },
      {
        id: 8,
        name: "Couple",
        
        icon: "/couple.png",
      },
      {
        id: 9,
        name: "Crossover",
        
        icon: "/crossover.png",
      },

  ];

 export default {
    CarMakes, Pricing, carCategories
}