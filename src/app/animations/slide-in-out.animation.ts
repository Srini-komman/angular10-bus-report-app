import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
export const slideInOut = trigger('slideInOut', [
  transition(':enter', [
    style({transform: 'translateY(-100%)'}),
    animate('1s ease-in')
  ]),
  transition(':leave', [
    animate('1s ease-in', style({transform: 'translateY(100%)'}))
  ])
]);
