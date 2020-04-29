import { async, TestBed } from '@angular/core/testing';
import { UserCurtrainingsComponent } from './user-curtrainings.component';
describe('UserCurtrainingsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserCurtrainingsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UserCurtrainingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-curtrainings.component.spec.js.map