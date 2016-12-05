import { Component } from '@angular/core';
import { ExternalDataService } from './externalData.service';
import { FormGroup }                 from '@angular/forms';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: './app/templates/app.component.html',
})
export class AppComponent {

  public items;
  public errorMessage;

  ngForm: FormGroup;
  constructor(private _externalDataService: ExternalDataService) { }

  ngOnInit() {
    this._externalDataService.fetchStories()
      .subscribe(
      items => this.items = items,
      error => console.log('Error fetching stories'));
  }

  addData(form: any) {
    let data = {"title":"","author":""};
    console.log('you submitted value:', form);
    data = { "title": form.title, "author": form.author };
    this._externalDataService.setData(data).subscribe(
      item => this.items.push(item)
    );
  }
}
