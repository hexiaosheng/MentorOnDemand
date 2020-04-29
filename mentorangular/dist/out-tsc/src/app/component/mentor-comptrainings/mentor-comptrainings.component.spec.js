import { async, TestBed } from '@angular/core/testing';
import { MentorComptrainingsComponent } from './mentor-comptrainings.component';
describe('MentorComptrainingsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MentorComptrainingsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MentorComptrainingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mentor-comptrainings.component.spec.js.map