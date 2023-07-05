import { Component } from '@angular/core';

@Component({
  selector: 'loader',
  template: `
    <div class="box">
      <div class="dots"></div>
      <div class="dots"></div>
      <div class="dots"></div>
    </div>
  `,
  styles: [
    `
      .box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 200px;
        height: 100px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      }
      .dots {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: var(--orange);
        animation: jump 1000ms infinite;
      }
      .dots:nth-of-type(2) {
        animation-delay: 100ms;
      }
      .dots:nth-of-type(3) {
        animation-delay: 200ms;
      }
      @keyframes jump {
        0% {
          transform: translateY(0px);
        }
        20% {
          transform: translateY(-20px);
        }
        40% {
          transform: translateY(0px);
        }
      }
    `,
  ],
})
export class LoaderComponent {
  constructor() {}
}
