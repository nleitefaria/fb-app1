import { Component, OnInit } from '@angular/core';
import { AggregatesService } from '../../services/aggregates.service';
import { CountriesService } from '../../services/countries.service';
import { IndicatorsService } from '../../services/indicators.service';
import { Country } from '../../model/country';
import { IncomeLevels } from '../../model/income-levels';

@Component( {
    selector: 'app-aggregates',
    templateUrl: './aggregates.component.html',
    styleUrls: ['./aggregates.component.css'],
    providers: [AggregatesService, CountriesService, IndicatorsService]
} )
export class AggregatesComponent implements OnInit {

    indicators: any[];
    p: number = 1;
    total: number;
    loading: boolean;
    location: string = "Aggregates";
    cId: string;
    ilcId: string;
    
    loadingIndicatorsCombo: boolean;

    countries: Country[] = [
    ];
    selectedCountriesFilterData: Country = this.countries[0];

    
    incomeLevelsData: IncomeLevels[] = [
        { "id": "NY.GDP.MKTP.CD", "name": "GDP (current US$)" },
    ];
    selectedIncomeLevelsFilterData: IncomeLevels = this.incomeLevelsData[0];

    constructor( private httpService: AggregatesService, private httpService1: CountriesService, private httpService2: IndicatorsService )
    {
    }

    ngOnInit() 
    {
        this.init();
    }

    init() 
    {
        this.cId = 'ABW';
        this.ilcId = 'NY.GDP.MKTP.CD';
        this.loadingIndicatorsCombo = true;
        this.populateCountriesCombo();
        this.populateIndicatorsCombo();
        this.getAggregatesForPageAndCountryAndIncomeLevels( 1, 'ABW', 'NY.GDP.MKTP.CD' );       
    }
    
    populateCountriesCombo()
    {
        this.httpService1.getAllCountries().subscribe(
                response => {
                    if ( response.error ) {
                        alert( 'Server Error' );
                    } else {
                        
                        this.total = response[0].total;
                        this.countries = response[1];                                          
                    }
                },
                error => {
                    alert( 'Server error' );
                }
        );
    }
    
    populateIndicatorsCombo()
    {
        this.httpService2.getAllIndicators().subscribe(
                response => 
                {
                    if ( response.error ) 
                    {
                        alert( 'Server Error' );
                    } 
                    else 
                    {                        
                        this.loadingIndicatorsCombo = false;
                        this.total = response[0].total;
                        this.incomeLevelsData = response[1];  
                    }
                },
                error => {
                    alert( 'Server error' );
                }
        );
        
        
        
    }

    getPage( page: number ) {
        this.loading = true;
        this.httpService.getAggregates( this.cId, this.ilcId, page ).subscribe(
            response => {
                if ( response.error ) {
                    alert( 'Server Error' );
                } else {
                    this.p = page;
                    this.total = response[0].total;
                    this.indicators = response[1];
                    this.loading = false;
                }
            },
            error => {
                alert( 'Server error' );
            }
        );
    }

    getAggregatesForPageAndCountryAndIncomeLevels( page: number, country: string, incomeLevels: string ) {
        this.loading = true;
        this.httpService.getAggregates( country, incomeLevels, page ).subscribe(
            response => {
                if ( response.error ) {
                    alert( 'Server Error' );
                } else {
                    this.p = page;
                    this.total = response[0].total;
                    this.indicators = response[1];
                    this.loading = false;
                }
            },
            error => {
                alert( 'Server error' );
            }
        );
    }

    onSelectCountriesFilter( countryId )
    {      
        this.selectedCountriesFilterData = null;
        for ( var i = 0; i < this.countries.length; i++ ) 
        {
            if ( this.countries[i].id == countryId )
            {
                this.selectedCountriesFilterData = this.countries[i];
            }
        }

        this.cId = countryId;
        this.getAggregatesForPageAndCountryAndIncomeLevels( this.p, this.cId, this.ilcId );
    }

    onSelectIncomeLevelCodesFilter( incomeLevelCodesId )
    {
        
        this.selectedIncomeLevelsFilterData = null;
        for ( var i = 0; i < this.incomeLevelsData.length; i++ )
        {
            if ( this.incomeLevelsData[i].id == incomeLevelCodesId ) 
            {
                this.selectedIncomeLevelsFilterData = this.incomeLevelsData[i];
            }
        }
        this.ilcId = incomeLevelCodesId;
        this.getAggregatesForPageAndCountryAndIncomeLevels( this.p, this.cId, this.ilcId );
    }
}
