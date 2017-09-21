var odsFetch = function(url, callback) {
  // TODO: add fetch polyfill
  fetch(url, {
    method: 'get'
  }).then(function(res) {
    return res.json();
  }).then(function(data) {
    callback(data);
  });
}

odsFetch('https://cdmx.opendatasoft.com/api/records/1.0/search/?dataset=hospitales-cdmx&facet=column_1&facet=column_3&facet=column_4', function(data) {
  for (var i = 0; i < data.records.length; i++) {
    console.log(data.records[i].fields);
  }
});
