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
  $.getJSON("/lib/dapps.json", function (json){
    dapps = json;
    $.getJSON( "https://api.p3c.io/dappdirect/balance", function( json ) {
      console.log()
      $('#dapps').DataTable( {
        responsive: true,
        order: [[ 0, 'desc' ]],
        data: dapps,
        columns: [
            { data: 'balance', 
            render: function ( data, type, row ) {
              if (row.contract == ""){ return ""}
              return json[row.contract]
              }
            }, 
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
                if (row.contract == ""){ return "Dynamic"}
                return linkify("Link", "https://gastracker.io/addr/" + data)
              }
            },
            { data: 'audit',
            render: function ( data, type, row ) {
              if (data != "") {
                return linkify("Yes", data);
              } else {
                return "No"
              }
            }
          },
        ]} );
    });
  })
} );

$('#sponsor').load("https://api.p3c.io/sponsor/")
$('#global').load("https://api.p3c.io/dappdirect/global");