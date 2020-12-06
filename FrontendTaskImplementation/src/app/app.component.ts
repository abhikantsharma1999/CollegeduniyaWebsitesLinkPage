import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// tslint:disable-next-line: import-blacklist
import { Observable } from 'rxjs';
import colleges from './colleges.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'collegedunia';
  public list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  public colleges:
    {
      college_name: string,
      promoted: string,
      discount: number,
      original_fees: number,
      discounted_fees: number,
      fees_cycle: string,
      image: string,
      ranking: string,
      tags: string[],
      amenties: string[],
      rating: number,
      rating_remarks: string,
      famous_nearest_places: string,
      nearest_place: string[],
      offertext: string
    }[] = colleges;

  public YourModel: any;

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit(): void {
    let i = 0;
    for (i = 0; i > 0; i++) {
      this.list.push(i);
    }
    this.getJSONFromLocal().subscribe(
      data => {

        this.YourModel = data;
      },
      error => console.error(`Failed because: ${error}`));
  }
  constructor(private httpClient: HttpClient) { }
  public getJSONFromLocal(): Observable<any> {
    return this.httpClient.get('./colleges.json')
  }
}
