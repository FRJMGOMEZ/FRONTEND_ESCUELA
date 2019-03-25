import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NYTApiService {
  private apiKey: string = 'HAlZpdKkzELqZMm1B5wGsLgV03I1SDqG'
  private url: string =`https://api.nytimes.com/svc/topstories/v2/music.json?api-key=${this.apiKey}`
  constructor() { }
}
