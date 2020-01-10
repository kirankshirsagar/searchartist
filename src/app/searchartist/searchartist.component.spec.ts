import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchartistComponent } from './searchartist.component';

describe('SearchartistComponent', () => {
  let component: SearchartistComponent;
  let fixture: ComponentFixture<SearchartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
