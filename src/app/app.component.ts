import { Component } from '@angular/core';

@Component({
  selector: 'app-ngbd-carousel-basic',
  templateUrl: './app.component.html'
})

export class NgbdCarouselBasic {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  tokyo = '/assets/tokyo.JPG';
  citron = '/assets/citron.JPG';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegues-front';
}
