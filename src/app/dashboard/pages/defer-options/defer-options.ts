import { Component } from '@angular/core';
import { Title } from "../../../shared/title/title";
import { HeavyLoaderFast } from "../../../shared/heavy-loaders/heavy-loader-fast/heavy-loader-fast";

@Component({
  selector: 'defer-options',
  imports: [Title, HeavyLoaderFast],
  templateUrl: './defer-options.html',
})
export class DeferOptions {

}
