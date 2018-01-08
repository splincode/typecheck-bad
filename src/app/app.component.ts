import { Component } from '@angular/core';

export interface CtxField {
  id: number;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  ctxFields: CtxField[] = [];
  selectedCtxField: CtxField;

  constructor() {
    this.selectedCtxField = {
      id: 0,
      value: "8-900-0000-000"
    };
  }

  public ngOnInit() {

    // mock
    this.ctxFields = [
      {
        id: 1,
        value: "8-911-1111-111"
      },
      {
        id: 2,
        value: "8-922-2222-222"
      }
    ];

  }

}
