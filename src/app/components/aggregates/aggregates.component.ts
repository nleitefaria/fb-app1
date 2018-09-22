import { Component, OnInit } from '@angular/core';
import { AggregatesService } from '../../services/aggregates.service';

@Component({
  selector: 'app-aggregates',
  templateUrl: './aggregates.component.html',
  styleUrls: ['./aggregates.component.css'],
  providers: [AggregatesService]
})
export class AggregatesComponent implements OnInit {

    indicators: any[];
    p: number = 1;
    total: number;
    loading: boolean;
    location: string = "Aggregates"; 
  
    constructor(private httpService : AggregatesService) 
    {   
    } 
  
    ngOnInit() 
    {
      this.init();  
    }
    
    init()
    {  
      this.getPage(1);
    }
  
    getPage(page: number)
    {
      this.loading = true;  
        this.httpService.getAggregates('br', 'NY.GDP.MKTP.CD', page).subscribe(
      response =>{
        if(response.error) { 
          alert('Server Error');
        } else {                        
          this.p = page;                                
          this.total = response[0].total;
          this.indicators = response[1];       
          
          alert(this.total);
          alert(this.indicators);
          
          this.loading = false;                   
        }
      },
      error =>{
        alert('Server error');
      }
    );
    }

}
