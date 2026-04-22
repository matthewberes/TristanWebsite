import { NgFor, ViewportScroller } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  imports: [NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit, AfterViewInit {
  constructor(private route: ActivatedRoute, private scroller: ViewportScroller) { }

  services = [
    { title: 'Sedan/Coupe', description: 'Professional car detailing for sedans and coupes', price: 'Starting at $100', image: 'images/car.jpg', link: 'car' },
    { title: 'Hatchback/CUV', description: 'Comprehensive detailing for hatchbacks and CUVs', price: 'Starting at $125', image: 'images/hatchback.jpg', link: 'cuv' },
    { title: 'SUV/Truck', description: 'Specialized care for SUVs and trucks', price: 'Starting at $150', image: 'images/suv.jpg', link: 'suv' },
  ];

  private serviceToScroll: string | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const pathService = params.get('service');
      if (pathService) {
        this.serviceToScroll = pathService;
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.serviceToScroll) {
      setTimeout(() => {
        this.scroller.scrollToAnchor(this.serviceToScroll!);
      }, 0);
    }
  }
}