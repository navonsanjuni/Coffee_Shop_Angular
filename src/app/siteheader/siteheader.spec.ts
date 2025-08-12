import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Siteheader } from './siteheader';

describe('Siteheader', () => {
  let component: Siteheader;
  let fixture: ComponentFixture<Siteheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Siteheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Siteheader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
