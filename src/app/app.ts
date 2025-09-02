import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Privacy } from './privacy/privacy';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Privacy],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularCourse');

  helloWorld: string = "Hello world from TS";

  clickMe() {
    alert("Beni Tıkladın..")
  }

  changeHelloWorldVariable(event: any) {
    this.helloWorld = event.target.value;
  }
}
