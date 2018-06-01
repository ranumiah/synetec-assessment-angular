import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../../app.component';
import { CitiesListComponent } from './cities-list.component';

describe('CitiesListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CitiesListComponent
      ],
    }).compileComponents();
  }));
  
  it('should create the cities list component', async(() => {
    const fixture = TestBed.createComponent(CitiesListComponent);
    const citiesList = fixture.debugElement.componentInstance;
    expect(citiesList).toBeTruthy();
  }));
});
