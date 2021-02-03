var countries = require("./regionsGeoBounds").regionBoundMap;

exports.findByCoordinates = function (country, lon, lat) {
  var regions = countries[country].regions;
  var regionsNames = Object.keys(regions);
  var matches = [];
  for (var i=0; i < regionsNames.length; i++) {
    var name = regionsNames[i];
    var region = regions[name];
    if (!region.bounds) continue;
    var [lon1, lat1, lon2, lat2] = region.bounds.split(",").map(Number);
    var isLon = lon >= lon1 && lon <= lon2;
    var isLat = lat >= lat1 && lat <= lat2;
    if (isLat && isLon) {
      matches.push(region);
    }
  }

  return matches;
}