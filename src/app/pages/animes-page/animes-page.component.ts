import { LoadingService } from "./../../shared/components/loading/services/loading.service";
import { AnimesService } from "src/app/shared/services/animes.service";
import { AnimeInterface } from "src/app/shared/models/Anime.interface";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-animes-page",
  templateUrl: "./animes-page.component.html",
  styleUrls: ["./animes-page.component.scss"],
})
export class AnimesPageComponent implements OnInit {
  animes?: AnimeInterface[];
  searchText: string = "";
  years: number[] = [1907, 2022];

  constructor(
    private loadingService: LoadingService,
    private animesService: AnimesService
  ) {}
  ngOnInit() {
    this.search(null, this.years);
  }

  search(text: string | null, years: number[] | null) {
    this.loadingService.next(true);
    this.animesService.getFilterAnimes(text, years).subscribe((res: any) => {
      console.log(res.data);
      this.animes = res.data;
      this.loadingService.next(false);
    });
  }
}
