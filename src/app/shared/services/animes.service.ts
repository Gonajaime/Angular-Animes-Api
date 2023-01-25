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


  getFilterAnimes(text: string | null, years: number[] | null ) {
    return this.http.get(`https://kitsu.io/api/edge/anime?page%5Boffset%5D=0&page%5Blimit%5D=20${text ? "&filter%5Btext%5D=" + text : ""}&sort=-user_count&filter%5Byear%5D=${years![0]}..${years![1]}`)
    
  }



  // getAnime() {}

  // ostAnime() {}
  // putAnime() {}p
}
