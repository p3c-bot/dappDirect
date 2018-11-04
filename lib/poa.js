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

function linkify(name, link) {
  return '<a href=' + link + ' target=_blank>' + name + '</a>'
}

$(document).ready(function () {
  $.getJSON("/lib/poa-dapps.json", function (json) {
    dapps = json;
    $.getJSON("https://api.p3c.io/dappdirect/poa/balance", function (balance) {
      $.getJSON("https://api.p3c.io/dappdirect/poa/digest", function (json) {
        digest = json
        $('#dapps').DataTable({
          responsive: true,
          order: [
            [0, 'desc']
          ],
          data: dapps,
          columns: [{
              data: 'users',
              render: function (data, type, row) {
                if (row.contract == "") {
                  return ""
                }
                return digest[row.contract.toLowerCase()].users
              }
            },
            {
              data: 'volume',
              render: function (data, type, row) {
                if (row.contract == "") {
                  return ""
                }
                return digest[row.contract.toLowerCase()].volume.toFixed(2)
              }
            },
            {
              data: 'dapp',
              render: function (data, type, row) {
                return linkify(data.name, data.link)
              }
            },
            {
              data: 'balance',
              render: function (data, type, row) {
                if (row.contract == "") {
                  return ""
                }
                return parseInt(balance[row.contract.toLowerCase()])
              }
            },
            {
              data: 'category'
            },
            {
              data: 'description'
            },
            {
              data: 'contact',
              render: function (data, type, row) {
                return linkify(data.name, data.link)
              }
            },
            {
              data: 'contract',
              render: function (data, type, row) {
                if (row.contract == "") {
                  return "Unknown"
                }
                return linkify("Link", "https://blockscout.com/poa/core/address/" + data + "/transactions")
              }
            },
            {
              data: 'audit',
              render: function (data, type, row) {
                if (data != "") {
                  return linkify("Yes", data);
                } else {
                  return "No"
                }
              }
            },
          ]
        });
      });
    });
  })
});

$('#sponsor').load("https://api.p3c.io/sponsor/")
$('#global').load("https://api.p3c.io/dappdirect/poa/global");