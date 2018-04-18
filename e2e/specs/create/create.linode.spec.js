import Create from '../../pageobjects/create';

const { constants } = require('../../constants');

describe('Create - Menu Suite', () => {
    beforeEach(() => {
        browser.url(constants.routes.dashboard);
    });

    it('should display create linode in header and link to create linode page', () => {
        Create.menuButton.click();
        Create.linodeMenuItem.waitForVisible();
        expect(Create.linodeMenuItem.isVisible()).toBe(true);

        Create.linode();
        Create.selectionCards.forEach(card => expect(card.isVisible()).toBe(true));
    });

    xit('TODO - should display create volume in header and link to create volume page', () => {
        Create.menuButton.click();
        expect(Create.volumeMenuItem.isVisible()).toBe(true);

        Create.volume();
    });

    xit('TODO - should display create nodebalancer in header and link to create nodebalancer page', () => {
        Create.menuButton.click();
        expect(Create.nodeBalancerMenuItem.isVisible()).toBe(true);

        Create.nodebalancer();
    });
});
