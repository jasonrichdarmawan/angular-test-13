import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatTableExampleComponent } from './mat-table-example.component';

describe('MatTableExampleComponent', () => {
  let component: MatTableExampleComponent;
  let fixture: ComponentFixture<MatTableExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatTableExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatTableExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
