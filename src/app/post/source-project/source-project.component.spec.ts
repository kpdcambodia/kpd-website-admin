import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SourceProjectComponent } from './source-project.component';

describe('SourceProjectComponent', () => {
  let component: SourceProjectComponent;
  let fixture: ComponentFixture<SourceProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SourceProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SourceProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
