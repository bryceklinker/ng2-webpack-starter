export class GetStartedPage {
    navigate() {
        browser.get('/');
        browser.wait(() => browser.getCurrentUrl().then(url => url.indexOf('welcome') > -1), 1000);
        
        element(by.linkText('Get Started')).click();
        browser.wait(() => browser.getCurrentUrl().then(url => url.indexOf('/get-started') > -1), 500);
    }

    getTitle() {
        return element(by.className('get-started-title')).getText();
    }
}