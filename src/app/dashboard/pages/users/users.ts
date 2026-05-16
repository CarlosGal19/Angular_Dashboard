import { Component, inject } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { Title } from "../../../shared/title/title";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'users',
  imports: [Title, RouterLink],
  templateUrl: './users.html',
})
export class Users {

  usersService = inject(UsersService);
}
