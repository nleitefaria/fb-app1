import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

import { IndicatorsService } from '../../services/indicators.service';

@Component({
  selector: 'app-indicators-details',
  templateUrl: './indicators-details.component.html',
  styleUrls: ['./indicators-details.component.css'],
  providers: [IndicatorsService]
})

export class IndicatorsDetailsComponent implements OnInit {

	id: string;
	indicator: any;

  	constructor(private route: ActivatedRoute, private httpService : IndicatorsService) 
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
					this.indicator = response[1][0];						
				}
			},
			error =>{
				alert('Server error');
			}
		);	
  	}

}
