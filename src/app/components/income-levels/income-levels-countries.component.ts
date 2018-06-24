import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-income-levels-countries',
  templateUrl: './income-levels-countries.component.html',
  styleUrls: ['./income-levels-countries.component.css'],
  providers: [CountriesService]
})
export class IncomeLevelsCountriesComponent implements OnInit {

    id: string;
	countries: any;
    p: number = 1;
    total: number;
    loading: boolean;
    location: string = "Countries"; 
    
  	constructor(private route: ActivatedRoute, private httpService : CountriesService) 
  	{
  		this.route.params.subscribe((params) => 
  		{
  			this.id = params.id; 				
		});	
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
        this.httpService.getCountriesWithIncomeLevel(this.id, page).subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {																					
					this.p = page;																
					this.total = response[0].total;
					this.countries = response[1];				
					this.loading = false;	  								
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }
  	

}
