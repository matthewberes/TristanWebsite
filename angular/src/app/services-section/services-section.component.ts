import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services-section',
  imports: [NgFor],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.css'
})
export class ServicesSectionComponent {

  constructor(private router: Router) { }
  services = [
    { title: 'Sedan/Coupe', description: 'Starting at $100', image: 'images/car.jpg', link: 'car' },
    { title: 'Hatchback/CUV', description: 'Starting at $125', image: 'images/hatchback.jpg', link: 'cuv' },
    { title: 'SUV/Truck', description: 'Starting at $150', image: 'images/suv.jpg', link: 'suv' },
  ];

  navigateTo(link: string): void {
    this.router.navigate(['/services/' + link]);
  }
}
