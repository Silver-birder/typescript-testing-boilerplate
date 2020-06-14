import fc from 'fast-check';
import {sum} from '../src/math';

describe('sort', () => {
    it('should have the same length as source', () => {
        fc.assert(
            fc.property(fc.integer(), (n) => {
                expect(sum(n, n)).toBe(n + n);
            })
        );
    });
});

