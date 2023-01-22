import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AnimesService {
  constructor(private http: HttpClient) {}

  getAnimes() {
    return this.http.get("https://kitsu.io/api/edge/trending/anime?limit=5")
    
  }

  getAnimes1(){
    return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=5&sort=-user_count")
  }

  getAnimes2(){
    return this.http.get("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=5&sort=-user_count")
  }

  getAnimes3(){
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-average_rating")
  }

  getAnimes4(){
    return this.http.get("https://kitsu.io/api/edge/anime?page%5Blimit%5D=5&sort=-user_count")
  }

  // getAnime() {}

  // postAnime() {}
  // putAnime() {}
}
