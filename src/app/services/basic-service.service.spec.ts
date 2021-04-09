import { TestBed } from '@angular/core/testing';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BasicService } from './basic-service.service';

describe('BasicService', () => {
  let service: BasicService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[BasicService]
    });
    service = TestBed.inject(BasicService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('getNumbers() should return two values by GET', () => {
    const values = {
      "minVal": 1,
      "maxVal": 100
    }
    service.getNumbers().subscribe((res) => {
      expect(res).toEqual(values)
    })
    const req = httpMock.expectOne('https://demo7595722.mockable.io/getValues');
    expect(req.request.method).toEqual('GET');
    req.flush(values);

    httpMock.verify();
  
  });

  it('getRange() should return an array of {value: number} by GET', () => {
    const values = {
      "values": [
             {"value": 1.99},
             {"value": 5.99},
             {"value":10.99},
             {"value": 30.99},
             {"value": 50.99},
             {"value": 70.99}
         ]
     }
    service.getRange().subscribe((res) => {
      expect(res).toEqual(values)
    })
    const req = httpMock.expectOne('https://demo7595722.mockable.io/getRange');
    expect(req.request.method).toEqual('GET');
    req.flush(values);

    httpMock.verify();
  
  });

});
