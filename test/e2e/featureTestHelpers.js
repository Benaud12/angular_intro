var httpMocker = angular.module('httpMocker', ['ngMockE2E'])

var testSingleResult = [
  {
  "login": "testy",
  "avatar_url": "test/e2e/testImage/test_image.jpg",
  "html_url": "noLink"
  }
]

var testMultipleResult = [
  {
    "login": "test1",
    "avatar_url": "test/e2e/testImage/test_image.jpg",
    "html_url": "noLink"
  },
  {
    "login": "test2",
    "avatar_url": "test/e2e/testImage/test_image.jpg",
    "html_url": "noLink"
  },
  {
    "login": "test3",
    "avatar_url": "test/e2e/testImage/test_image.jpg",
    "html_url": "noLink"
  }
]
