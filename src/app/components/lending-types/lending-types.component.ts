import { Component, OnInit } from '@angular/core';
import { LendingTypesService } from '../../services/lending-types.service';

@Component({
  selector: 'app-lending-types',
  templateUrl: './lending-types.component.html',
  styleUrls: ['./lending-types.component.css'],
  providers: [LendingTypesService]
})

export class LendingTypesComponent implements OnInit
{
    lendingTypes: any;
    p: number = 1;
    total: number;
    loading: boolean;
    location: string = "Lending Types"; 
    
    constructor(private httpService : LendingTypesService) 
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
        this.httpService.getLendingTypes(page).subscribe(
			response =>
			{
				if(response.error)
				{ 
					alert('Server Error');
				} 
				else 
				{												
					this.p = page;																
					this.total = response[0].total;
					this.lendingTypes = response[1];				
					this.loading = false;	  								
				}
			},
			error =>
			{
				alert('Server error');
			}
		);
    }

}
