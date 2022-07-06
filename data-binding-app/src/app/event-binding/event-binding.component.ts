import { Component } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatSelectChange } from '@angular/material/select';

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
  selectDisabled: boolean = false;
  selectedOption: string = '';

  save(): void {
    alert('Click!')
  }

  incrementation(): void {
    this.index++;
    this.buttonName = `It was clicked ${this.index} times`;
  }

  disable(): void {
    this.btnEnable = false;
    this.spinnerMode = 'indeterminate'

    setTimeout(() => {
      this.btnEnable = true;
      this.spinnerMode = 'determinate';
    }, 1000);
  }

  cbChange(event: MatCheckboxChange): void {
    this.selectDisabled = event.checked;
  }

  selectionChange(event: MatSelectChange): void {
    this.selectedOption = event.value;
  }
}
