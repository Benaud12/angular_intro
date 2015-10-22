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
    var mock = require('protractor-http-mock');
    beforeEach(function() {
      mock([{
         request: {
           path: "https://api.github.com/search/users?access_token=  &q=spike01",
           method: 'GET'
         },
         response: {
           data: {
                   "login": "spike01",
                   "avatar_url": "https://avatars.githubusercontent.com/u/7307631?v=3",
                   "html_url": "https://github.com/spike01"
                 }
         }
       }]);
    })

    afterEach(function(){
      mock.teardown();
    });
    // var $httpBackend
    // beforeEach(inject(function(_$httpBackend_){
    //   $httpBackend = _$httpBackend_;
    //   $httpBackend.expectGet("https://api.github.com/search/users?access_token=" + githubAccessToken + "&q=spike01")
    //     .respond([
    //               {
    //                 "login": "spike01",
    //                 "avatar_url": "https://avatars.githubusercontent.com/u/7307631?v=3",
    //                 "html_url": "https://github.com/spike01"
    //               }
    //             ]);
    // }))


    // beforeEach(function() {
    //   browser.addMockModule('httpMocker', function() {
    //     angular.module('httpMocker', ['ngMockE2E'])
    //     .run(function($httpBackend) {
    //       httpBackend = $httpBackend
    //       httpBackend.whenGET(
    //         "https://api.github.com/search/users?access_token=" + githubAccessToken + "&q=spike01")
    //         .respond([
    //           {
    //             "login": "spike01",
    //             "avatar_url": "https://avatars.githubusercontent.com/u/7307631?v=3",
    //             "html_url": "https://github.com/spike01"
    //           }
    //         ])
    //     })
    //   })
    // });

    it('finds profiles', function() {

      searchBox.sendKeys('spike01');
      searchButton.click();

      expect(element(by.binding('user.login')).getText()).
          toEqual('spike01');
      // $httpBackend.flush();
    });
  })


  // it('finds profiles', function() {
  //
  //   searchBox.sendKeys('spike');
  //   searchButton.click();
  //
  //   var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
  //   var names = profiles.map(function(user){
  //     return user.getText();
  //   });
  //   expect(names).toContain('spike01');
  // });

});
