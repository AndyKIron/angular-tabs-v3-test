import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject<void>();
  selectedExampleId$ = new BehaviorSubject<number>(1);

  rbGroupOptions: Array<any> = [
    { id: 1, label: 'option 1 preselected' },
    { id: 2, label: 'option 1 preselected; option 3 disabled' },
    { id: 3, label: 'option 1 preselected; icons left; option 3 disabled' },
    { id: 4, label: 'option 1 preselected; icons right; option 3 disabled' },
  ];
  radioFormControl = new FormControl(this.rbGroupOptions[0]);

  ngOnInit() {
    this.radioFormControl.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((option) => {
        this.selectedExampleId$.next(option.id);
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onTabSelected($event) {
    console.log('Selected Tab', $event);
  }
}
