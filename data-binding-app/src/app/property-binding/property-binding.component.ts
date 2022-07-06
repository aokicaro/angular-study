import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  color: string = 'accent';
  btnDisabled: boolean = true;
  colors: string[] = ['primary', 'accent', 'warn', ''];
  idColors: number = 0;

  ngOnInit(): void {
    this.changeColors();
  }

  changeColors(): void {
    setInterval(() => {
      this.idColors = (++this.idColors) % this.color?.length;
    }, 500);
  }


}
