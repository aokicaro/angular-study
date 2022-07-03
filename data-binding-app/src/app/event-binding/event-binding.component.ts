import { Component } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {

  buttonName: string = 'My Button';
  index: number = 0;
  spinnerMode: ProgressSpinnerMode = 'determinate';
  btnEnable: boolean = true;

  save(): void {
    alert('Click!')
  }

  incrementation(): void {
    this.index++;
    this.buttonName = `It was clicked ${this.index} times`;
  }

  disable() {
    this.btnEnable = false;
    this.spinnerMode = 'indeterminate'

    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = 'determinate';
    }, 1000);
  }
}
