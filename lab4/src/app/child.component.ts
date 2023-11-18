import { Component, Input} from '@angular/core';
     
@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent{ 
    @Input() numbers: string;
    diff: number = 0;

  calculateDifference() {
    const numberArray = this.numbers.split(',').map(Number);
    const max = Math.max(...numberArray);
    const min = Math.min(...numberArray);
    this.diff = max - min;
  }
}