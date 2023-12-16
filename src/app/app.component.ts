import { Component } from '@angular/core';
import { IUsers } from './models/IUsers';

import { usersData } from './data/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users : IUsers[] = usersData
  title = 'my-app';
}
