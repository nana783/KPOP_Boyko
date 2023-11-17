
// app.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<label for="inputString">Введіть рядок:</label>
      <input type="text" id="inputString" [(ngModel)]="inputString" />
      <button (click)="reverseString()">Показати у зворотньому порядку</button>
      <p *ngIf="reversedString">Результат: {{ reversedString }}</p>`
})
export class AppComponent {
  inputString: string = '';
  reversedString: string = '';

  reverseString() {
    this.reversedString = this.inputString.split('').reverse().join('');
  }
}
