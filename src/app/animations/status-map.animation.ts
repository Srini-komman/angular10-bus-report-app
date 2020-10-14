import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const statusMap = trigger('status', [
  state('On Time', style({
    transform: 'scale(1.05)',
    color: 'green',
  })),
  state('Early', style({
    transform: 'scale(0.95)',
    color: 'blue',

  })),
  state('Late', style({
    transform: 'scale(1.05)',
    color: 'red',
  })),
  state('Unknown', style({
    transform: 'scale(0.95)',
    color: 'red',

  })),
  transition('* <=> *', animate('3000ms linear'))
]);
