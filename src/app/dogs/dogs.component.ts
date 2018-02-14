import { Component, OnInit } from '@angular/core';
import {DogService } from '../dog.service';
import { Dog } from './dog';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})

export class DogsComponent implements OnInit {

  dogs: any[];
  title: string;
  toggle = true;
  selectedDog: Dog = new Dog();
  lastUpdated: string = '';

  constructor(private dogService: DogService) {}

  ngOnInit() {
    this.title = 'Add a New Dog';
    this.dogs = this.dogService.getDogs();
  }

  get format() {return this.toggle ?  'fullDate' : 'shortDate'; }

toggleDate(dog) {
  if (dog.dateType === 'shortDate') {
    dog.dateType = 'fullDate';
 } else {
    dog.dateType = 'shortDate';
}
}
deleteDog(dog) {
  this.dogs.splice(dog, 1);
  console.log(this.dogs);
}

editDog(dog: Dog) {
  this.selectedDog = Object.assign({}, dog);
  console.log(dog);
 }

 addLastUpdated(dog) {
  this.lastUpdated = 'Last dog added: ' + new Date().toString() + ', name: ' + dog.name;
}

}
