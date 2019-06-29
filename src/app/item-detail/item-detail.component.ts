import {Component, OnInit} from '@angular/core';

const ITEM = {
  name: 'Tractor Kubota 10.5 Hp',
  image: '/assets/images/tractorkubota.jpg',
  category: 'machinery',
  label: 'tractor',
  price: '4.500',
  description: 'Tractor útil para arado en superficies regulares sin pendientes pronunciadas.' +
    ' Modelo JB11XA, Con Rotocultor, Diesel, 4x4, 10,5 HP. Año 2015',
  comments: [
    {
      rating: 5,
      comment: 'Imagina todo lo qu puedes hacer con este tractor y su arado!',
      author: 'Leo Messi',
      date: '2012-10-16T17:57:28.556094Z'
    },
    {
      rating: 4,
      comment: 'Me dio mucho confort, desearia que mi suegro lo compre!',
      author: 'Tania Barrancos',
      date: '2014-09-05T17:57:28.556094Z'
    },
    {
      rating: 3,
      comment: 'UUsalo, solamente usalo y veras que no hay comparacion con otros!',
      author: 'Mario Rodriguez',
      date: '2015-02-13T17:57:28.556094Z'
    },
    {
      rating: 4,
      comment: 'Lo ultimo, modelo de lujo!',
      author: 'Damian Cardozo',
      date: '2013-12-02T17:57:28.556094Z'
    },
    {
      rating: 2,
      comment: 'Simplemente es muy lindo!',
      author: 'Gustavo Lopez',
      date: '2011-12-02T17:57:28.556094Z'
    }
  ]
};

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {

  item = ITEM;

  constructor() {
  }

  ngOnInit() {
  }

}
