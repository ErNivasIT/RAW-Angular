import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  providers: [NgbCarouselConfig]
})
export class WelcomeComponent implements OnInit {
  constructor(config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {
    this.images.push("../assets/pexels-photo-698508.jpeg");
    this.images.push("../assets/pexels-photo-785538.jpeg");
    this.images.push("../assets/pexels-photo-1774303.jpeg");
  }
  images: string[] = [];
}
