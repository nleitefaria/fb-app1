import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-countries-details',
  templateUrl: './countries-details.component.html',
  styleUrls: ['./countries-details.component.css'],
  providers: [CountriesService]
})

export class CountriesDetailsComponent implements OnInit {

    id: string;
	country: any;

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
  		this.httpService.getOne(this.id).subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {								
					this.country = response[1][0];						
				}
			},
			error =>{
				alert('Server error');
			}
		);	
  	}

}
