import { Injectable } from '@angular/core';
import { College } from './college';

@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  constructor() { }

  getAllCollegeList() {
    let collegeList: College[] = [
        {College: 'Delft Univ', Branch: 'IT', Name:'Sam', Gender: 'Male', Email: 'sam@test.com', Phone: '9588899999', DOB: '01/04/1984', Address: 'Bruin Street, Texas'},
        {College: 'German Univ', Branch: 'CS', Name:'Peter', Gender: 'Male', Email: 'peter@test.com', Phone: '9579999938', DOB: '20/03/19987', Address: 'Iss Street, Hague'},
        {College: 'Leiden Univ', Branch: 'EE', Name:'Nikki', Gender: 'Female', Email: 'nikki@test.com', Phone: '9577799988', DOB: '22/06/1988', Address: 'Wein Street, Leiden'},
        {College: 'TU Delft', Branch: 'CD', Name:'Alex', Gender: 'Male', Email: 'alex@test.com', Phone: '9555599999', DOB: '13/12/1986', Address: 'Mars Street, Delft'},
        {College: 'Dann Univ', Branch: 'IT', Name:'Tessha', Gender: 'Female', Email: 'teshs@test.com', Phone: '9588899999', DOB: '17/04/1984', Address: 'Bruin Street, Texas'},
        {College: 'Austria Univ', Branch: 'CS', Name:'David', Gender: 'Male', Email: 'david@test.com', Phone: '9579999938', DOB: '13/03/1987', Address: 'Iss Street, Hague'},
        {College: 'Swiss Univ', Branch: 'EE', Name:'Rom', Gender: 'Female', Email: 'rom@test.com', Phone: '9577799988', DOB: '22/09/1988', Address: 'Wein Street, Leiden'},
        {College: 'Hague Delft', Branch: 'CD', Name:'Braay', Gender: 'Male', Email: 'braay@test.com', Phone: '9555599999', DOB: '11/12/1986', Address: 'Mars Street, Delft'},
        {College: 'Europe Univ', Branch: 'IT', Name:'Rony', Gender: 'Male', Email: 'rony@test.com', Phone: '9588899999', DOB: '01/03/1984', Address: 'Bruin Street, Texas'},
        {College: 'Berlin Univ', Branch: 'CS', Name:'Honh', Gender: 'Male', Email: 'honh@test.com', Phone: '9579999938', DOB: '25/08/1987', Address: 'Iss Street, Hague'},
        {College: 'Leew Univ', Branch: 'EE', Name:'Sammy', Gender: 'Female', Email: 'sammy@test.com', Phone: '9577799988', DOB: '12/02/1983', Address: 'Wein Street, Leiden'},
        {College: 'UK Delft', Branch: 'CD', Name:'Olive', Gender: 'Male', Email: 'olive@test.com', Phone: '9555599999', DOB: '13/11/1983', Address: 'Mars Street, Delft'}
    ];
    return collegeList;
  }
}
