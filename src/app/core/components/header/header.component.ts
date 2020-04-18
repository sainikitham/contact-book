import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar is-dark">
      <div class="navbar-brand">
        <a class="navbar-item">
          <h2>Contact Book</h2>
        </a>
      </div>      
    </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
