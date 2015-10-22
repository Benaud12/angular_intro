describe('Github Profile finder', function() {
  var searchBox = element(by.model('searchCtrl.searchTerm'))
  var searchButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function() {

    searchBox.sendKeys('spike01');
    searchButton.click();

    expect(element(by.binding('user.login')).getText()).
        toEqual('spike01');
  });

  it('finds profiles', function() {

    searchBox.sendKeys('spike');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    var names = profiles.map(function(user){
      return user.getText();
    });
    expect(names).toContain('spike01');
  });

});
