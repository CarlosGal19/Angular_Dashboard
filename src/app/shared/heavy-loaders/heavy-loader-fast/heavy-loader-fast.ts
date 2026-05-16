import { Component, input } from '@angular/core';

@Component({
  selector: 'heavy-loader-fast',
  imports: [],
  templateUrl: './heavy-loader-fast.html',
})
export class HeavyLoaderFast {
  cssClass = input<string>();
}
