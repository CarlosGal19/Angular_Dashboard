import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.html',
})
export class SideMenu {
  menuItems = routes
    .map(r => r.children ?? [])
    .flat()
    .filter(r => r && r.path !== '**')
    .filter(r => !r.path?.includes(':'))
}
