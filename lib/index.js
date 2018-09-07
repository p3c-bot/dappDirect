function getURL(query) {
  var vars = query.split("&");
  var query_string = {};
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    // If first entry with this name
    if (typeof query_string[pair[0]] === "undefined") {
      query_string[pair[0]] = decodeURIComponent(pair[1]);
      // If second entry with this name
    } else if (typeof query_string[pair[0]] === "string") {
      var arr = [query_string[pair[0]], decodeURIComponent(pair[1])];
      query_string[pair[0]] = arr;
      // If third or later entry with this name
    } else {
      query_string[pair[0]].push(decodeURIComponent(pair[1]));
    }
  }
  return query_string;
}

function linkify(name, link){
  return '<a href=' + link + ' target=_blank>' +name + '</a>'
}

$(document).ready( function () {
  $('#dapps').DataTable( {
    data: dapps,
    columns: [
        { data: 'category' },
        { data: 'dapp',
          render: function ( data, type, row ) {
            return linkify(data.name, data.link)
          }
        },
        { data: 'description' },
        { data: 'contact',
          render: function ( data, type, row ) {
            return linkify(data.name, data.link)
          }
        },
        { data: 'contract',
          render: function ( data, type, row ) {
            return linkify(data, "https://gastracker.io/addr/" + data)
          }
        },
    ]} );
} );


$('#sponsor').load("https://sponsor.p3c.io/");