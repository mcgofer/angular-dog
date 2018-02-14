import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from 'selenium-webdriver';
import { DogService } from './dog.service';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  sayHello: any;
  title = 'Paw Patrol';

    // ngOnChanges(changes: SimpleChanges) {
    //   console.log(`ngOnChanges - data is ${this.dogName}`);
    //    // tslint:disable-next-line:forin
    //   // for (let propName in changes) {
    //   //   let chng = changes[propName];
    //   //   let cur  = JSON.stringify(chng.currentValue);
    //   //   let prev = JSON.stringify(chng.previousValue);
    //   //   this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    //   }
    // }
    ngOnInit() {
      this.sayHello = window.setInterval(() => console.log('Hello!'),  1000);
    }

    ngOnDestroy() {
      window.clearInterval(this.sayHello);
    }

}


// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { DogService } from '../app/dog.service';
// import {Dog} from '../app/dogs/dog';


// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent implements OnInit, OnDestroy  {
//   dogName: string;
//   dogWeight: number;
//   dogBirthDate: Date;
//   sayHello: any;
//   title = 'Paw Patrol';
//   toggle: true;

//   constructor() {}

//   ngOnInit() {
//   	this.sayHello = window.setInterval(() => console.log('Hello!'),  1000);
//   }

//   ngOnDestroy(){
//   	window.clearInterval(this.sayHello);
//   }

//   get format() { return this.toggle ? 'fullDate' : 'shortDate' }
//   toggleDate(dog) {
//     if (dog.dateType === 'fullDate') {
//       dog.dateType = 'shortDate';
//     }
//     else {
//       dog.dateType = 'fullDate';
//     }
//   };
// }
