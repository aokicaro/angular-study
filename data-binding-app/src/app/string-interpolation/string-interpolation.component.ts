import { Person } from './../shared/person.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {

person: Person = {
  firstName: 'Icaro',
  lastName: 'Aoki',
  age: 30,
  address: 'Rio de Janeiro'
}

}
