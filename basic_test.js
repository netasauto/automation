Feature('CodeceptJS demo');

Scenario('check Welcome page on site', (I) => {
    I.amOnPage('/');
    I.see('Gmail');
    I.fillField('q', 'hasan kaya');
    I.wait(10);
    I.see("Hasan Kaya Profiles | Facebook");
    I.click("Hasan Kaya Profiles | Facebook");
})