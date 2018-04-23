import { Component, OnInit } from '@angular/core';
import { SourcesService } from '../../services/sources.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css'],
  providers: [SourcesService]
})

export class SourcesComponent implements OnInit {

    sources: any;
    p: number = 1;
    total: number;
    loading: boolean;
    location: string = "Sources"; 

  	constructor(private httpService : SourcesService) 
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
        this.httpService.getSources(page).subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {												
					this.p = page;																
					this.total = response[0].total;
					this.sources = response[1];				
					this.loading = false;	  								
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }
}
