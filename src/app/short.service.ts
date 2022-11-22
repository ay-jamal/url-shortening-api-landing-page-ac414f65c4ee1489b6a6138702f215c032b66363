import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ShortService {
  emptyArrray = true;
  original_link: any;
  short_link: any;
  response: any;
  urlsArray: object[] = [{}];

  constructor(private http: HttpClient) {}

  getShorten(url: any) {
    this.http
      .get('https://api.shrtco.de/v2/shorten?url=' + url)
      .subscribe((data: object) => {
        console.log(data);
        this.response = data;
        this.urlsArray.push({
          orignal: this.response.result.original_link,
          short: this.response.result.short_link,
        });
        console.log(this.urlsArray);
        this.emptyArrray = false;
      });
  }
}
