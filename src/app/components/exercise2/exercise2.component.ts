import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { BasicService } from '../../services/basic-service.service';
import { combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.scss']
})
export class Exercise2Component implements OnInit {

  public minVal: number = 0;
  public maxVal: number = 0;
  public steps: any[]= [{value:0}];
  public options: Options = {
    noSwitching: true,
    showTicksValues: true,
    stepsArray: this.steps
  }
  public numbersFromService$: Observable<any> = this.basicService.getNumbers();
  public rangeFromService$: Observable<any> = this.basicService.getRange();

  constructor(private basicService: BasicService) { 
    
    this.rangeFromService$.toPromise()
      .then(res => {
        this.options.stepsArray = res.values
        this.minVal = res.values[0].value;
        this.maxVal = res.values[res.values.length-1].value;
        
      })
      .catch(e => console.error(e));

  }

  ngOnInit(): void {}

  public updateValues(event: any){
    this.minVal = event.value;
    this.maxVal = event.highValue;
  }



}
