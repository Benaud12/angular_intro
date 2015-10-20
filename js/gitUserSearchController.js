githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var self = this;

  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function (){
    self.searchResult = searchResource.get(
      { q: self.searchTerm
        // access_token: a430ed11c9af0aeb38cf56e98f0501010a008905
      }
    );
  };

}]);