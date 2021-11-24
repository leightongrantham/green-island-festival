import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageBannerComponent } from './image-banner.component';

describe('ImageBannerComponent', () => {
  let component: ImageBannerComponent;
  let fixture: ComponentFixture<ImageBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
