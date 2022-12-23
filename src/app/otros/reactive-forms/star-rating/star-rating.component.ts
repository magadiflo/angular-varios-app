import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  private _rating: number = 3;
  ratingArray: number[] = [0, 1, 2, 3, 4];


  ngOnInit(): void {

  }

  getIcon(indice: number) {
    return this._rating >= (indice + 1) ? 'fas fa-star' : 'far fa-star';
  }

  onClick(rating: number): void {
    this._rating = rating;
    console.log(this._rating);
  }


}
