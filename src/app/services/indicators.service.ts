import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class IndicatorsService 
{
  	private BASE_URL:string = environment.apiUrl;

  	constructor(private http:Http) 
  	{ 
  	}
  	
  	public getAllIndicators():any
    {
  	    return this.http.get(`${this.BASE_URL}indicators?format=JSON&per_page=16712`)
  	      .map((response:Response) => response.json())
  	      .catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
    }
  	
  	public getIndicators(page : Number):any
    { 	
    	return this.http.get(`${this.BASE_URL}indicators?format=JSON&per_page=10&page=${page}`)
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	}
	
	public getOne(id : string):any{
		return this.http.get(`${this.BASE_URL}indicators/${id}?format=JSON`)
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	}

}
