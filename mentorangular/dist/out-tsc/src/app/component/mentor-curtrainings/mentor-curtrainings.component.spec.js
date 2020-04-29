import { async, TestBed } from '@angular/core/testing';
import { MentorCurtrainingsComponent } from './mentor-curtrainings.component';
describe('MentorCurtrainingsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MentorCurtrainingsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MentorCurtrainingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mentor-curtrainings.component.spec.js.map