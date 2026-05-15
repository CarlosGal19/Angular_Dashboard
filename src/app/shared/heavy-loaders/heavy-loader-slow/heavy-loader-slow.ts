import { Component, input } from '@angular/core';

@Component({
  selector: 'heavy-loader-slow',
  imports: [],
  templateUrl: './heavy-loader-slow.html',
})
export class HeavyLoaderSlow {
  cssClass = input.required<string>();
  constructor() {

    const start = Date.now();
    while( Date.now() - start < 3000 ) {}

    console.log('Cargado');
  }
}
