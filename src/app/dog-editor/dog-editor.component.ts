import { Component, OnInit, Input } from '@angular/core';

import { Dog } from '../dogs/dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})

export class DogEditorComponent implements OnInit {
  @Input() dog: Dog = new Dog();
  constructor(private dogService: DogService) { }

  ngOnInit() {
  }

  addDog() {
  this.dogService.addDog(this.dog);
  }

  editDog(dog: Dog) {
    this.dogService.editDog(this.dog.id, this.dog);
  }

  clearDog() {
    this.dog = new Dog();
  }

}





// import { Component, OnInit } from '@angular/core';

// import { Dog } from '../dogs/dog';
// import { DogService } from '../dog.service';

// @Component({
//   selector: 'app-dog-editor',
//   templateUrl: './dog-editor.component.html',
//   styleUrls: ['./dog-editor.component.css']
// })
// export class DogEditorComponent implements OnInit {
//   dogName: string;
//   dogWeight: number;
//   dogBirthDate: Date;
//   constructor(private dogService: DogService) { }

//   ngOnInit() {

//   }


//   addDog(){
//   	let newDog = new Dog()
//   	newDog.name = this.dogName;
//   	newDog.weight = this.dogWeight;
//   	newDog.birthDate = this.dogBirthDate;

//   	this.dogService.addDog(newDog);
//   }

// }
