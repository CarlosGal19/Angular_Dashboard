import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenu } from "../shared/side-menu/side-menu";

@Component({
  selector: 'dashboard',
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dashboard.html',
})
export class Dashboard {

}
