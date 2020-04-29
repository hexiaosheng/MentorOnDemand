import { async, TestBed } from '@angular/core/testing';
import { MentorSkillsComponent } from './mentor-skills.component';
describe('MentorSkillsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MentorSkillsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(MentorSkillsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=mentor-skills.component.spec.js.map