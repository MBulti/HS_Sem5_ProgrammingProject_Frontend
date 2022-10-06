import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

import { RecommendationResultComponent } from './recommendation-result.component';

describe('RecommendationResultComponent', () => {
  let component: RecommendationResultComponent;
  let fixture: ComponentFixture<RecommendationResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecommendationResultComponent ],
      imports: [
        MatListModule,
        MatCardModule,
        HttpClientModule
       ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});