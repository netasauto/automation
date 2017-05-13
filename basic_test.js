Feature('CodeceptJS demo');

Scenario('check Welcome page on site', (I) => {
    I.amOnPage('/');
    I.see('Gmail');
    I.fillField('q', 'hasan kaya');
    I.pressKey("Enter"); //will be deprecated soon
    I.wait(3);
    I.see("Hasan Kaya Profiles | Facebook");
    I.click("Hasan Kaya Profiles | Facebook");
    I.saveScreenshot("test.jpg");
})

Scenario('check another test', (I) => {
    I.amOnPage('http://www.facebook.com');
    I.see('Email or Phone');
    I.see('Facebook');
    I.fillField('email', 'onrulusoy');
    I.fillField('pass', 'asdf');
    I.click('Log In');
    I.wait(3);
    I.see("The password that you've entered is incorrect.");
})

Scenario('Google Image Search', (I) => {
    I.amOnPage('/');
    I.see('Gmail');
    I.fillField('q', 'volkan kumbasar');
    I.pressKey("Enter"); //will be deprecated soon
    I.wait(3);
    I.click('//*[@id="hdtb-msb-vis"]/div[2]/a');
    I.wait(2);
    I.saveScreenshot("kumbasar.jpg");
})

Scenario('Google Image Search', (I) => {
    I.amOnPage('http://www.aksigorta.com');
    I.scrollTo('//*[@class="jquery-selectbox-moreButton"]');
    I.click('//*[@class="jquery-selectbox-moreButton"]');
    I.see('Ailemi Kapsasın');
    I.see('Evimi Kapsasın');
    I.see('Aracımı Kapsasın');
    I.see('İşimi Kapsasın');
    I.saveScreenshot("combobox.jpg");
})

// Scenario('Custom Func Test', (I) => {
//     I.amOnPage("http://etkinlikcim-new-design.eu-west-1.elasticbeanstalk.com");
//     I.checkImage();
//     // I.logYaz("ne yaptın");
// })

// Scenario('Custom Func Test', (I) => {
//     I.tryThat();
// })

// Scenario('Custom Func Test', (I) => {
//     I.loginAS01();
//     I.see('Provisioning Client');
//     I.see('Welcome to the Provisioning Client');
//     I.see('Logged in as: admin');
// })