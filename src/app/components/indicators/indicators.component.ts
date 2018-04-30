import { Component, OnInit } from '@angular/core';
import { IndicatorsService } from '../../services/indicators.service';

@Component({
  selector: 'app-indicators',
  templateUrl: './indicators.component.html',
  styleUrls: ['./indicators.component.css'],
  providers: [IndicatorsService]
})

export class IndicatorsComponent implements OnInit {

    indicators: any;
    p: number = 1;
    total: number;
    loading: boolean;
    location: string = "Indicators"; 
    
    constructor(private httpService : IndicatorsService) 
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
        this.httpService.getIndicators(page).subscribe(
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

}
