import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ServicesSectionComponent } from '../services-section/services-section.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, TestimonialsComponent, ServicesSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
