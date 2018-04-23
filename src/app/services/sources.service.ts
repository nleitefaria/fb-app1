import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class SourcesService {

  	private BASE_URL:string = 'https://api.worldbank.org/v2/';

  	constructor(private http:Http) { }
  	
  	public getSources(page : Number):any
    { 	
    	return this.http.get(`${this.BASE_URL}sources?format=JSON&per_page=10&page=${page}`)
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	}

}
