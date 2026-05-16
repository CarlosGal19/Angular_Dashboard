import { HttpClient } from '@angular/common/http';
import { IUser, IUserResponse, IUsersResponse } from './../interfaces/req-response.interface';
import { computed, inject, Injectable, signal } from '@angular/core';
import { delay, map } from 'rxjs';

interface IState {
  users: IUser[];
  loading: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  http = inject(HttpClient);

  // # has the same meaning that private, due to private does not guarantee that a property is totally private
  #state = signal<IState>({
    loading: true,
    users: [],
  });

  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );

  constructor() {

    this.http.get<IUsersResponse>('https://reqres.in/api/users')
      .pipe( delay(1500) )
      .subscribe( res => {

        this.#state.set({
          loading: false,
          users: res.data,
        })

      });
  }

  getUserById( id: string ) {
    return this.http.get<IUserResponse>(`https://reqres.in/api/users/${ id }`)
      .pipe(
        delay(1500),
        map( resp => resp.data )
      )

  }

}
