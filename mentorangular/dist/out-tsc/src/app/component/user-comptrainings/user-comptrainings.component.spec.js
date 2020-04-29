import { async, TestBed } from '@angular/core/testing';
import { UserComptrainingsComponent } from './user-comptrainings.component';
describe('UserComptrainingsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserComptrainingsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UserComptrainingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-comptrainings.component.spec.js.map