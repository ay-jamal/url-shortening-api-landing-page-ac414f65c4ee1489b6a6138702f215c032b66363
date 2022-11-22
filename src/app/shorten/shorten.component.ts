import { Component, OnInit } from '@angular/core';
import { ShortService } from '../short.service';

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.scss'],
})
export class ShortenComponent implements OnInit {
  shorten: any;

  constructor(private shortService: ShortService) {}

  ngOnInit(): void {}

  short(text: any) {
    console.log(text.value);
    this.shortService.getShorten(text.value);
  }
}
