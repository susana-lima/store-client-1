import {Component, OnInit} from '@angular/core';
import {Item} from '../shared/item';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  items: Item[] = [
    {
      name: 'Tractor Kubota 10.5 Hp',
      image: '/assets/images/tractorkubota.jpg',
      category: 'machinery',
      label: 'tractor',
      price: '4.500',
      description: 'Tractor útil para arado en superficies regulares sin pendientes pronunciadas.' +
        ' Modelo JB11XA, Con Rotocultor, Diesel, 4x4, 10,5 HP. Año 2015'
    },
    {
      name: 'Tractor kubota con pala 20Hp',
      image: '/assets/images/tractorkubota-pala.jpg',
      category: 'machinery',
      label: 'tractor',
      price: '10.500',
      description: 'Tractor útil para arado en superficies con pendientes pronunciadas, para situaciones de alto esfuerzo. ' +
        'Modelo L1-20DT, Con Rotocultor, Diesel 4x4, 20 HP, Con Pala.'
    },
    {
      name: 'Motocultor yanmar 250',
      image: '/assets/images/motocultor.jpg',
      category: 'machinery',
      label: 'motocultor',
      price: '2.500',
      description: 'Motocultor útil para arado en superficies de dificil acceso, con espacios reducidos, ' +
        'para situaciones de alto esfuerzo. Arado De Mano Modelo YC80, Diesel.'
    },
    {
      name: 'Montacarga',
      image: '/assets/images/montacarga.jpg',
      category: 'machinery',
      label: '',
      price: '15.999',
      description: 'Hechos pensados en la industria donde la exigencia del equipo es frecuente. Komatsu BOBLE, ALTURA ELEVANTE 3,0 MTS'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
