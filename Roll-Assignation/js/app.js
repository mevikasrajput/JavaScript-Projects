function showHideRow(row) {
  $('#' + row).toggle()
}

function HideRow(row) {
  $('#' + row).hide()
}

var substringMatcher = function (strs) {
  console.log('strs', strs)
  return function findMatches(q, cb) {
    console.log('q', q)
    var matches, substringRegex

    // an array that will be populated with substring matches
    matches = []
    console.log('matches', matches)

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i')

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function (i, str) {
      if (substrRegex.test(str)) {
        matches.push(str)
      }
    })

    console.log('matches', matches)

    cb(matches)
  }
}

var employees = [
  'Aohn Doe(51860000)',
  'Bohn Doe(51860000)',
  'Dohn Doe(51860000)',
  'Sohn Doe(51860000)',
  'Kohn Doe(51860000)',
  'Tohn Doe(51860000)',
]

$('.roleSearch').typeahead(
  {
    hint: true,
    highlight: true,
    minLength: 1,
  },
  {
    name: 'employees',
    source: substringMatcher(employees),
  },
)
