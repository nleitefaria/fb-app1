import { Component, OnInit } from '@angular/core';
import { IncomeLevelsService } from '../../services/income-levels.service';

@Component({
  selector: 'app-income-levels',
  templateUrl: './income-levels.component.html',
  styleUrls: ['./income-levels.component.css'],
  providers: [IncomeLevelsService]
})

export class IncomeLevelsComponent implements OnInit {

    incomeLevels: any;
    p: number = 1;
    total: number;
    loading: boolean;
    location: string = "Income Levels"; 

  	constructor(private httpService : IncomeLevelsService) 
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
        this.httpService.getIncomeLevels(page).subscribe(
			response =>{
				if(response.error) { 
					alert('Server Error');
				} else {												
					this.p = page;																
					this.total = response[0].total;
					this.incomeLevels = response[1];				
					this.loading = false;	  								
				}
			},
			error =>{
				alert('Server error');
			}
		);
    }


}
