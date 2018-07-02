import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'rating',
  templateUrl: 'rating.html'
})
export class RatingComponent implements OnInit {

  @Input('rating') rating: number
  stars: any[] = []
  emptyStars: any[] = []

  constructor() { }

  ngOnInit() {
    this.stars = new Array(this.rating);
    this.emptyStars = new Array(5 - this.rating);
  }

}
