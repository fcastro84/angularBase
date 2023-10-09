import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';

interface Competition {
  name: string;
  country: string;
  year: number;
  winner: string;
  runnerup: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Competition[];
}

@Component({
  selector: 'app-football',
  standalone: true,
  imports: [CommonModule, HttpClientModule, NgFor],
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.scss'],
})
export class FootballComponent implements OnInit, OnDestroy {

    totalPage = 0;
    pages: any[] = [];
    subcription$!: Subscription;
    gool$!: Observable<ApiResponse>;
    page = 1;
    url = 'https://jsonmock.hackerrank.com/api/football_competitions';
    urlPage = 'https://jsonmock.hackerrank.com/api/football_competitions?page=';

  constructor(private http: HttpClient) {
    this.subcription$ = this.http.get(this.url).subscribe((item: any) => {  
      this.totalPage = item?.total_pages;
      this.pages = Array(this.totalPage);
    }
    );
    
   }

   ngOnInit() {
    this.gool$ = this.http.get<ApiResponse>(`${this.urlPage}${this.page}`);
  }
  
   searchResults( page: number ){
    console.log('page  '+page);
    this.page = page;
    this.gool$ = this.http.get<ApiResponse>(`${this.urlPage}${this.page}`);
   }
  
   ngOnDestroy(): void {
    this.subcription$.unsubscribe();
  }
 

  

}
