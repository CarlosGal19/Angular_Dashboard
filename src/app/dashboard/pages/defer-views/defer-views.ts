import { Component } from '@angular/core';
import { Title } from "../../../shared/title/title";
import { HeavyLoaderSlow } from "../../../shared/heavy-loaders/heavy-loader-slow/heavy-loader-slow";

@Component({
  selector: 'defer-views',
  imports: [Title, HeavyLoaderSlow],
  templateUrl: './defer-views.html',
})
export class DeferViews {

}
