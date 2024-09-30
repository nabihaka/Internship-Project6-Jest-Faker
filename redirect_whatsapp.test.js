// redirect_whatsapp.test.js
import { redirectToLink } from './redirect_whatsapp';

describe('redirectToLink', () => {
    beforeAll(() => {
        // Mock window.location.href
        delete window.location;
        window.location = { href: '' };
    });

    it('should redirect to the specified link', () => {
        redirectToLink();
        expect(window.location.href).toBe("https://wa.me/+6285714129261");
    });
});
