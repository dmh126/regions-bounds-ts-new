var stringSimilarity = require("string-similarity");
var countries = require("./regionsGeoBounds").regionBoundMap;

exports.findRegion = function(country, region) {
  var regions = Object.keys(countries[country].regions);
  var matches = stringSimilarity.findBestMatch(region, regions);
  var region = matches.bestMatch.target;
  
  return countries[country].regions[region];
}

