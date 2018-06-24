import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class CountriesService 
{
    private BASE_URL:string = environment.apiUrl;

  	constructor(private http:Http) 
  	{ 
  	}
  	
  	public getCountries(page : Number):any
    { 	
    	return this.http.get(`${this.BASE_URL}countries?format=JSON&per_page=10&page=${page}`)
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	}
	
	public getOne(id : string):any{
		return this.http.get(`${this.BASE_URL}countries/${id}?format=JSON`)
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	}
	
	public getCountriesWithIncomeLevel(id : string, page : Number):any{		
		return this.http.get(`${this.BASE_URL}countries?incomeLevel=${id}&format=JSON&per_page=10&page=${page}`)
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	}

}
