var fs = require('fs');
var data = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
var coordinates = data.map(function(obj) {
  return [obj.lat, obj.lng]
}).filter(function(obj) {
  return obj[0] && obj[1]
})
var clusterMaker = require('./clusters');

//number of clusters, defaults to undefined
clusterMaker.k(10);

//number of iterations (higher number gives more time to converge), defaults to 1000
clusterMaker.iterations(100);

//data from which to identify clusters, defaults to []
clusterMaker.data(coordinates);
var clusters = clusterMaker.clusters()
// console.log(clusters);
console.log(clusters.map(function(cluster){cluster.count = cluster.clusterInd.length; delete cluster.clusterInd; return cluster}));
