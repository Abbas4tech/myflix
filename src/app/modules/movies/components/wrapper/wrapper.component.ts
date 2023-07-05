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
        position: absolute;
        top: 6rem;
        left: 50%;
        transform: translateX(-50%);
      }
    `,
  ],
})
export class WrapperComponent {}
