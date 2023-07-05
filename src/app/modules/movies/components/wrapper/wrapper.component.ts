import { Component } from '@angular/core';

@Component({
  selector: 'wrapper',
  template: `
    <section class="wrapper">
      <ng-content></ng-content>
    </section>
  `,
  styles: [
    `
      .wrapper {
        max-width: 80rem;
        width: 90%;
        margin: 2rem auto;
      }
    `,
  ],
})
export class WrapperComponent {}
