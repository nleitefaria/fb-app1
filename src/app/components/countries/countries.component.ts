import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css'],
  providers: [CountriesService]
})

export class CountriesComponent implements OnInit
{
	  countries: any;
    p: number = 1;
    total: number;
    loading: boolean;
    location: string = "Countries and Regions"; 

  	constructor(private httpService : CountriesService) 
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
        this.httpService.getCountries(page).subscribe(
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
