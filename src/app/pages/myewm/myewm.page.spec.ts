import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyewmPage } from './myewm.page';

describe('MyewmPage', () => {
  let component: MyewmPage;
  let fixture: ComponentFixture<MyewmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyewmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyewmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
