import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-ngc-range',
  templateUrl: './ngc-range.component.html',
  styleUrls: ['./ngc-range.component.scss']
})
export class NgcRangeComponent implements OnInit {

  @Input() min!: number;
  @Input() max!: number; 
  @Input() options!: Options

  @Output() changeValues: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    
  }



  public onChange(event: any){
    this.changeValues.emit(event)
    
  }
}
