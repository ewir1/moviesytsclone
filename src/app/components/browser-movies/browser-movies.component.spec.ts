import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserMoviesComponent } from './browser-movies.component';

describe('BrowserMoviesComponent', () => {
  let component: BrowserMoviesComponent;
  let fixture: ComponentFixture<BrowserMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
