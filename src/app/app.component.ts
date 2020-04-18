import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>
    <app-users-list></app-users-list>
  `,
  styles: []
})
export class AppComponent {}
