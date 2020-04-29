import { async, TestBed } from '@angular/core/testing';
import { AdminTechnologiesComponent } from './admin-technologies.component';
describe('AdminTechnologiesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AdminTechnologiesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(AdminTechnologiesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=admin-technologies.component.spec.js.map