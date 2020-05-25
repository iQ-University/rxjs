import { filter, reduce, map } from 'rxjs/operators';
import { from } from 'rxjs';

const pipeArray = [
  'evERytHinG',
  2,
  'Is',
  [6, 2, 9],
  '  A',
  { id: 41 },
  'sTReam'
];

// everything is a stream

// We create an observable with from() from a data source / data producer
const pipeStream$ = from(pipeArray);

// we do the logic through operators
pipeStream$.pipe(
  filter(element => typeof element === 'string'),
  map(element => element.trim().toLowerCase()),
  reduce((accumulator, currenValue) => {
    accumulator += currenValue + ' ';
    return accumulator;
  }, '')

  // robinet
  // observer
).subscribe(result => {
  console.log(result);
})