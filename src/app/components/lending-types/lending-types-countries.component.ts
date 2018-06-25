import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-lending-types-countries',
  templateUrl: './lending-types-countries.component.html',
  styleUrls: ['./lending-types-countries.component.css'],
  providers: [CountriesService]
})

export class LendingTypesCountriesComponent implements OnInit {

  	id: string;
	source: any;	
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
  		this.getPage(this.id, 1);	
  	}
  	
  	getPage(id: string, page: number)
    {
    	this.loading = true;  
        this.httpService.getCountriesForLendingType(this.id, page).subscribe(
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
