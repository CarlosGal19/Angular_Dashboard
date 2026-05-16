import { Component, computed, inject } from '@angular/core';
import { Title } from "../../../shared/title/title";
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'user',
  imports: [Title, CommonModule],
  templateUrl: './user.html',
})
export class User {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  titleLabel = computed(() => {
    if (this.user()) {
      return `Información del usuario: ${this.user()?.first_name} ${
        this.user()?.last_name
      } `;
    }

    return 'Información del usuario';
  });
}
