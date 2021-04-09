import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { BasicService } from '../../services/basic-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.scss']
})
export class Exercise1Component implements OnInit {


  public minVal: number = 0;
  public maxVal: number = 0;

  public options: Options = {
    floor: this.minVal,
    ceil : this.maxVal,
    noSwitching: true
  }

  public numbersFromService$: Observable<any> = this.basicService.getNumbers();

  constructor(private basicService: BasicService) {
    
    this.numbersFromService$.toPromise()
      .then(res => {
        this.minVal = res['minVal'];
        this.maxVal = res['maxVal'];
        this.options.floor = res['minVal'];
        this.options.ceil = res ['maxVal'];
        
      })
      .catch(e => console.error(e))
   }

  ngOnInit(): void {
  }

  public updateValues(event: any){
    this.minVal = event.value;
    this.maxVal = event.highValue;
  }

}
