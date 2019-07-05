import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CardNavigationComponent } from './card-navigation/card-navigation.component';
import { CardContentComponent } from './card-content/card-content.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CardNavigationComponent,
        CardContentComponent
      ],
      imports: [HttpClientModule]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'yugioh-card-browser'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('yugioh-card-browser');
  });


});
