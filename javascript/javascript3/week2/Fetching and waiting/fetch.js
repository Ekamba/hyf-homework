const url = 'https://api.punkapi.com/v2/beers?brewed_before=11-2012&abv_gt=6'

  fetch (url)
    .then (res => res.json())
    .then((json) => {
      return new Promise (res => {
        setTimeout(() => {
          res(json)
        }, 3 * 1000)
      })
    })
    .then (data => console.log(data))
    