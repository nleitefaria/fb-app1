import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class TopicsService {

  private BASE_URL:string = environment.apiUrl;

  	constructor(private http:Http) 
  	{ 
  	}
  	
  	public getTopics(page : Number):any
    { 	
    	//return this.http.get(`${this.BASE_URL}topics?format=JSON&per_page=10&page=${page}`)
    	return this.http.get(`https://sec-os-app5.7e14.starter-us-west-2.openshiftapps.com/departments/test`)
			.map((response:Response) => response.json())
			.catch((error:any) => Observable.throw(error.json().error) || 'Server Error');
	}

}
