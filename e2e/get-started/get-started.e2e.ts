import { GetStartedPage } from './get-started.po';

describe('Given Ng2 Webpack Start', () => {

    describe('When I go to get-started', () => {
        let getStartedPage: GetStartedPage;

        beforeEach(() => {
            getStartedPage = new GetStartedPage();
            getStartedPage.navigate();
        });

        it('Then I should see the get-started information', () => {
            expect(getStartedPage.getTitle()).toContain('Get Started');
        });
    });
})