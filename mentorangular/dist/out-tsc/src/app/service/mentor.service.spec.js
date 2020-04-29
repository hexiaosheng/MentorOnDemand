import { TestBed } from '@angular/core/testing';
import { MentorService } from 'src/app/service/mentor.service';
describe('MentorService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(MentorService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=mentor.service.spec.js.map