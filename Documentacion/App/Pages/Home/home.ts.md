# Documentacion home.component.spect.ts

#### describe 
``` ts
    import { ComponentFixture, TestBed } from '@angular/core/testing';
``` 

``` ts
import { HomeComponent } from './home.component';
``` 

``` ts
describe('HomeComponent', () => {
    //codigos siguientes
});
``` 

``` ts
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
``` 

``` ts
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });
``` 

``` ts
  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
``` 

``` ts
  it('should create', () => {
    expect(component).toBeTruthy();
  });
``` 
