describe('Github Profile finder', function() {

  var searchBox = element(by.model('searchCtrl.searchTerm'))
  var searchButton = element(by.className('btn'))

  beforeEach(function() {
    browser.get('http://localhost:8080');
  })

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Github user search');
  });

  describe('finding profiles', function() {

    beforeEach(function() {
      browser.addMockModule('httpMocker', function() {
        httpMocker.run(function($httpBackend) {
          $httpBackend.whenGET(
            "https://api.github.com/search/users?access_token=" + githubAccessToken + "&q=testy")
            .respond(
              { "items": testSingleResult }
            );
          $httpBackend.whenGET(
            "https://api.github.com/search/users?access_token=" + githubAccessToken + "&q=test")
            .respond(
              { "items": testMultipleResult }
            );
        });
      });
    });


    it('returns specific profile', function() {
      browser.get('http://localhost:8080');
      searchBox.sendKeys('testy');
      searchButton.click();
      expect(element(by.binding('user.login')).getText()).toEqual('testy');
    });

    it('returns list of profiles', function() {
      searchBox.sendKeys('test');
      searchButton.click();
      var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
      var names = profiles.map(function(user){ return user.getText(); });
      expect(names).toContain('test2');
      expect(profiles.count()).toBeGreaterThan(1);
    });

  });

});
