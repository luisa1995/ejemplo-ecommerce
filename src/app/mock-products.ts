import { Product } from './core/product';
import { Size } from './core/size';

export const PRODUCTS: Product[] = [
  
    {
    id: 1,
    name:'Clase V',
    imageUrls: [ '../assets/claseV-black.jpg', '../assets/claseV-white.jpg','../assets/claseV-darkblue.jpg'],
    price: 200,
    flavors: [    
      { name: 'black', color: '#17202A' },
      { name: 'white', color: '#FDFEFE' },
      { name: 'darkblue', color: '#1A5276' },
    ],
    sizes: [Size.SMALL, Size.LARGE],
  },
  {
    id: 2,
    name:'Clase B',
    imageUrls: [ '../assets/claseB-black.jpg', '../assets/claseB-white.jpg','../assets/claseB-sports.jpg'],
    price: 300,
    flavors: [    
      { name: 'black', color: '#17202A' },
      { name: 'white', color: '#FDFEFE' },
      { name: 'sports', color: '#1A5276' },
    ],
    sizes: [Size.SMALL, Size.LARGE],
  },
  {
    id: 3,
    name:'Clase G',
    imageUrls: [ '../assets/G-darkred.jpg', '../assets/G-darkblue.jpg','../assets/G-black.jpg'],
    price: 250,
    flavors: [    
      { name: 'darkred', color: '#641E16' },
      { name: 'darkblue', color: '#1A5276' },
      { name: 'black', color: '#17202A' },
    ],
    sizes: [Size.SMALL, Size.LARGE],
  },
  {
    id: 4,
    name:'Hatchback',
    imageUrls: [ '../assets/claseHatchback-black.jpg', '../assets/claseHatchback-gris.jpg','../assets/claseHatchback-white.jpg'],
    price: 280,
    flavors: [    
      { name: 'black', color: '#17202A' },
      { name: 'gris', color: '#707B7C' },
      { name: 'white', color: '#D0D3D4' },
    ],
    sizes: [Size.SMALL, Size.LARGE],
  },
  {
    id: 5,
    name:'AMG',
    imageUrls: [ '../assets/claseAmg-red.jpg', '../assets/claseAmg-white.jpg','../assets/claseAmg-yellow.jpg'],
    price: 400,
    flavors: [    
      { name: 'red', color: '#CB4335' },
      { name: 'white', color: '#D0D3D4' },
      { name: 'yellow', color: '#D4AC0D' },
    ],
    sizes: [Size.SMALL, Size.LARGE],
  },


];
