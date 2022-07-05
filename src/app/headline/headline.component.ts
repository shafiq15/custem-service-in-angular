import { Component, OnInit } from '@angular/core';
import { TcnewsapiService } from '../service/tcnewsapi.service'

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {

  constructor(private api:TcnewsapiService) { }
// display headline data
topHeadlinesData:any =[];
  ngOnInit(): void {
    this.api.tcHeadlines().subscribe((result)=>{
      console.log(result.articles);
      this.topHeadlinesData = result.articles;
    })
  }

}
