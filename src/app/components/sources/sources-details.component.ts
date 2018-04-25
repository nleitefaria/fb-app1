import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

import { SourcesService } from '../../services/sources.service';


@Component({
  selector: 'app-sources-details',
  templateUrl: './sources-details.component.html',
  styleUrls: ['./sources-details.component.css'],
  providers: [SourcesService]
})
export class SourcesDetailsComponent implements OnInit {

	id: number;
	source: any;

  	constructor(private route: ActivatedRoute, private httpService : SourcesService) 
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
					this.source = response[1][0];						
				}
			},
			error =>{
				alert('Server error');
			}
		);	
  	}

}
