import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../../services/topics.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css'],
  providers: [TopicsService]
})
export class TopicsComponent implements OnInit {

    topics: any;
    p: number = 1;
    total: number;
    loading: boolean;
    location: string = "Sources"; 

  	constructor(private httpService : TopicsService) 
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
        this.httpService.getTopics(page).subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {
					/*												
					this.p = page;																
					this.total = response[0].total;
					this.topics = response[1];				
					this.loading = false;	
					*/
					alert(response);  								
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }

}
