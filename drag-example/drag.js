import { fromEvent } from "rxjs";
import { takeUntil, switchMapTo, repeat } from "rxjs/operators";

const body = document.getElementById('body');
const button = document.getElementById('button');

// fromEvent

const click$ = fromEvent(button, 'click');
const mouseMove$ = fromEvent(body, 'mousemove');

// click$.subscribe(result => console.log(result));
// mouseMove$.subscribe(({ clientX, clientY }) => console.log(clientX, clientY));

const mouseDown$ = fromEvent(button, 'mousedown');
const mouseup$ = fromEvent(body, 'mouseup');

// mouseDown$.subscribe(result => console.log(result));
// mouseup$.subscribe((result) => console.log(result));

mouseDown$.pipe(
    switchMapTo(mouseMove$),
    takeUntil(mouseup$),
    repeat()
).subscribe(result => {
    button.style.top = result.clientY + 'px';
    button.style.left = result.clientX + 'px';
});