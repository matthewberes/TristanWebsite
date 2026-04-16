import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-testimonials',
  imports: [NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent implements OnInit {
  currIndex: number = 0;
  isMovingLeft: boolean = false;
  isMovingRight: boolean = false;

  testimonials = [
    { text: 'Tristan is the best! My car has never looked better.', author: 'Jaelin H.', stars: 5 },
    { text: 'Tristan did an amazing job on my car! It looks brand new again.', author: 'Kaya B.', stars: 5 },
    { text: 'Highly recommend Tristan for anyone looking for a thorough and professional car detailing service.', author: 'Matt B.', stars: 5 }
  ];
  private timerSub!: Subscription;
  seconds = 0;

  ngOnInit() {
    this.timerSub = timer(15000).subscribe(() => {
      this.nextTestimonial();
    });
  }

  ngOnDestroy() {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
  }

  nextTestimonial() {
    this.currIndex = (this.currIndex + 1) % this.testimonials.length;
    this.resetTimer();
    this.isMovingLeft = true;
    setTimeout(() => {
      this.isMovingLeft = false;
    }, 300);
  }

  prevTestimonial() {
    this.currIndex = (this.currIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetTimer();
    this.isMovingRight = true;
    setTimeout(() => {
      this.isMovingRight = false;
    }, 300);
  }

  goToTestimonial(index: number) {
    if (index < this.currIndex) {
      this.isMovingRight = true;
      setTimeout(() => {
        this.isMovingRight = false;
      }, 300);
    } else if (index > this.currIndex) {
      this.isMovingLeft = true;
      setTimeout(() => {
        this.isMovingLeft = false;
      }, 300);
    }
    this.currIndex = index;
    this.resetTimer();
  }

  resetTimer() {
    if (this.timerSub) {
      this.timerSub.unsubscribe();
    }
    this.timerSub = timer(15000).subscribe(() => {
      this.nextTestimonial();
    });
  }

  Array(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i);
  }
}
