import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Privacy } from './privacy/privacy';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Privacy, NgClass, NgStyle],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularCourse');

  helloWorld: string = "Hello world from TS";
  pClassNameRed: string = "red";
  pBackGroundColor: string = "backGroundColor";

  bgColor = "red";


  clickMe() {
    alert("Beni Tıkladın..")
  }

  changeHelloWorldVariable(event: any) {
    this.helloWorld = event.target.value;
  }

  checkActive() {
    return this.bgColor === 'red';
  }
}
