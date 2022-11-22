import { Component, OnInit } from '@angular/core';
import { ShortService } from '../short.service';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss'],
})
export class MainBodyComponent implements OnInit {
  shortArray!: any[];
  constructor(private short: ShortService) {}

  ngOnInit(): void {
    this.shortArray = this.short.urlsArray;
    console.log(this.shortArray);
  }

  copy(text: string) {
    navigator.clipboard.writeText(text);
  }
}
