import { LoadingService } from './../../shared/components/loading/services/loading.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AnimeInterface } from 'src/app/shared/models/Anime.interface';
import { AnimesService } from 'src/app/shared/services/animes.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {

  animes?: AnimeInterface[];
  animes1?: AnimeInterface[];
  animes2?: AnimeInterface[];
  animes3?: AnimeInterface[];
  animes4?: AnimeInterface[];
  constructor(private loadingService: LoadingService, private animesService: AnimesService) {}

  loadingCounter:number = 0;
  
  ngOnInit() {
    
    this.loadingService.next(true);
    
    this.animesService.getAnimes().subscribe((res: any) => {
      
      this.animes = res.data;
      this.loadingCounter++;
    });
    
    this.animesService.getAnimes1().subscribe((res: any) => {
      this.animes1 = res.data;
      this.loadingCounter++;
    });
    
    this.animesService.getAnimes2().subscribe((res: any) => {
      this.animes2 = res.data;
      this.loadingCounter++;
    });

    this.animesService.getAnimes3().subscribe((res: any) => {
      this.animes3 = res.data;
      this.loadingCounter++;
    });
    
    this.animesService.getAnimes4().subscribe((res: any) => {
      this.animes4 = res.data;
      this.loadingCounter++;
      this.loadingService.next(false);
    });
    
    
  }

  ngOnDestroy() {
    console.log('Me destruyo');
  }
}
