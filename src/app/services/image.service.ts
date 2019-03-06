import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import Unsplash from 'unsplash-js';
// import { toJson } from 'unsplash-js;'
import Unsplash, { toJson } from 'unsplash-js';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl = 'https://api.unsplash.com/';

  unsplash = new Unsplash({
    applicationId: '565166dc185512375b6d1d30d62f7e47fdc3f18a382a613614b20154f0dd7934'
  });

  constructor(private http: HttpClient) { }

  searchImage(term: string, count: number): Promise<any> {
    return this.unsplash.search.photos(term, 1, count).then(toJson);
  }

  getPhoto(id: string) {
    console.log(id);
    return this.unsplash.photos.getPhoto(id).then(toJson);
  }
}
