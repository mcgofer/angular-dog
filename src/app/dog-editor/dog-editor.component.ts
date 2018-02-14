import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Dog } from '../dogs/dog';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})

export class DogEditorComponent implements OnInit {
  @Input() dog: Dog = new Dog();
  @Output() dogAdded: EventEmitter<Dog> = new EventEmitter();
  constructor(private dogService: DogService) { }

  ngOnInit() {
  }

  addDog() {
  this.dogService.addDog(this.dog);
  this.dogAdded.emit(this.dog);
  }

  editDog(dog: Dog) {
    this.dogService.editDog(this.dog.id, this.dog);
  }

  clearDog() {
    this.dog = new Dog();
  }

  addLastUpdated(dog) {
    this.addLastUpdated = 'Last dog added: ' + new Date().toString() + ', name: ' + dog.name;
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
