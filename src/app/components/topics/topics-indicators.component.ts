import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { TopicsService } from '../../services/topics.service';

@Component({
  selector: 'app-topics-indicators',
  templateUrl: './topics-indicators.component.html',
  styleUrls: ['./topics-indicators.component.css'],
  providers: [TopicsService]
})
export class TopicsIndicatorsComponent implements OnInit 
{
	id: string;
	indicators: any;
    p: number = 1;
    total: number;
    loading: boolean;
    //location: string = "Indicators"; 
	
  	constructor(private route: ActivatedRoute, private httpService : TopicsService) 
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
        this.httpService.getIndicatorsForTopic(this.id, page).subscribe(
			response =>{
				if(response.error) 
				{ 
					alert('Server Error');
				} 
				else 
				{														
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
