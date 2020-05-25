import { from, interval, zip } from 'rxjs';

const fromString$ = from('hello world');
const fromArray$ = from(['hello world']);
const fromObject$ = from([{ key: 'hello world' }]);
const interval$ = interval(500);

zip(fromString$, interval$).subscribe(
    (res) => { console.log(res) },
    (err) => {
        console.log(err);
    },
    () => {
        console.log('completed');
    }
);

// fromArray$.subscribe((res) => console.log(res));

// fromObject$.subscribe((res) => console.log(res));

// interval$.subscribe((res) => console.log(res));