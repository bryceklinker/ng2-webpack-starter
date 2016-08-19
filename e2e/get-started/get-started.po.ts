export class GetStartedPage {
    navigate() {
        browser.get('/');
        element(by.linkText('Get Started')).click();
        browser.wait(() => browser.getCurrentUrl().then(url => url.indexOf('/get-started') > -1));
    }

    getTitle() {
        return element(by.className('get-started-title')).getText();
    }
}