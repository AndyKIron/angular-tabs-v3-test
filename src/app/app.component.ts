import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { RadioGroupOptions } from '@ironsource/fusion-ui/components/radio-group/common/entities';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  onDestroy$ = new Subject<void>();
  selectedExampleId$ = new BehaviorSubject<string>('1');

  contentOptions: RadioGroupOptions[] = [
    { id: '1', label: '1: option 1 preselected' },
    { id: '2', label: '2: option 1 preselected; option 3 disabled' },
    {
      id: '3',
      label: '3: option 1 preselected; icons left; option 3 disabled',
    },
    {
      id: '4',
      label: '4: option 1 preselected; icons right; option 3 disabled',
    },
    {
      id: '5',
      label: '5: option 1 preselected; icons only; option 3 disabled',
    },
  ];
  contentFormControl = new FormControl(this.contentOptions[0]);

  sizeOptions: RadioGroupOptions[] = [
    { id: 'sm', label: 'SM' },
    { id: 'md', label: 'MD (default)' },
    { id: 'lg', label: 'LG' },
    { id: 'xl', label: 'XL' },
  ];
  sizeFormControl = new FormControl(this.sizeOptions[1]);

  selectedTitle: string;
  selectedSizeClass: string;
  selectedSizeTitle: string;

  selectedTab;

  ngOnInit() {
    this.selectedTitle = `Tabs ${this.contentFormControl.value.label}`;
    this.contentFormControl.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((option) => {
        this.selectedExampleId$.next(option.id);
        this.selectedTitle = `Tabs ${option.label}`;
      });

    this.selectedSizeClass = `fu-size-${this.sizeFormControl.value.id}`;
    this.selectedSizeTitle = `Size: ${this.sizeFormControl.value.id}`;
    this.sizeFormControl.valueChanges
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((option) => {
        this.selectedSizeClass = `fu-size-${option.id}`;
        this.selectedSizeTitle = `Size: ${option.id.toUpperCase()}`;
      });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onTabSelected(selectedTab) {
    console.log('Selected Tab', selectedTab);
    this.selectedTab = `index:${selectedTab.index} : ${selectedTab.tabElement.textContent}`;
  }
}
