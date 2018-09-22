import { Component, OnInit } from '@angular/core';
import { AggregatesService } from '../../services/aggregates.service';
import { Country } from '../../model/country';

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

    countries: Country[] = [
       {"id": "ARB", "name": "Arab World"},
       {"id": "BRA", "name": "Brazil"},
       {"id": "CAN", "name": "Canada"}
       ];

    selectedCountriesFilterData: Country = this.countries[0];
  
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
      this.getAggregatesForPageAndCountry(1, 'ARB');
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
          this.loading = false;                   
        }
      },
      error =>{
        alert('Server error');
      }
    );
    }
    
    
    getAggregatesForPageAndCountry(page: number, country: string)
    {
        
        this.loading = true;  
        this.httpService.getAggregates(country, 'NY.GDP.MKTP.CD', page).subscribe(
      response =>{
        if(response.error) { 
          alert('Server Error');
        } else {                        
          this.p = page;                                
          this.total = response[0].total;
          this.indicators = response[1];       
          this.loading = false;                   
        }
      },
      error =>{
        alert('Server error');
      }
    );
        
        
        
    }
    
    
    
    onSelectCountriesFilter(countryId) {
        console.log('ICI');
        this.selectedCountriesFilterData = null;
        for (var i = 0; i < this.countries.length; i++) {
          if (this.countries[i].id == countryId) {
            this.selectedCountriesFilterData = this.countries[i];
          }
        }
        
           this.getAggregatesForPageAndCountry(this.p, countryId);
           
      }

}
