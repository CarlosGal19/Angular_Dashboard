import { Component, computed, signal } from '@angular/core';
import { Title } from "../../../shared/title/title";
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'change-detection',
  imports: [Title, JsonPipe],
  templateUrl: './change-detection.html',
})
export class ChangeDetection {

  currentFramework = computed(
    () => `Change detection - ${ this.frameworkAsSignal().name }`
  );


  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };


  constructor() {

    setTimeout(() => {


        // this.frameworkAsProperty.name = 'React';
        this.frameworkAsSignal.update( value => {
          value.name = 'React';

          return {...value};
        })

        console.log('Hecho');
    }, 3000);


  }
}
