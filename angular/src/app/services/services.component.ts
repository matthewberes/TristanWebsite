import { NgFor, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  constructor(private route: ActivatedRoute, private scroller: ViewportScroller) { }

  services = [
    { title: 'Sedan/Coupe', description: 'Starting at $100', image: 'images/car.jpg', link: 'car' },
    { title: 'Hatchback/CUV', description: 'Starting at $125', image: 'images/hatchback.jpg', link: 'cuv' },
    { title: 'SUV/Truck', description: 'Starting at $150', image: 'images/suv.jpg', link: 'suv' },
  ];

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const service = params['service'];
      this.scroller.scrollToAnchor(service);
    });
  }
}