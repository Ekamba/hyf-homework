
    const urls = [
    'https://api.github.com/search/repositories?q=user:cecastosic',

'https://api.github.com/search/repositories?q=user:Sreelatha-Vallabhaneni',

'https://api.github.com/search/repositories?q=user:mahieakhtar'

];
const allRequests = urls.map(url => 
  fetch(url).then(response => response.json())
);

 Promise.all(allRequests).then(results => {
   console.log(results)
   const ul = document.createElement('ul');
   document.body.appendChild(ul);
  const mainContainer = document.getElementsByClassName('container')[0];
  for ( let i = 0; i < results.length; i++){
    const items = results[i].items
    for (let j = 0; j < items.length; j++) {
      const item = items[j]
      let div = document.createElement('div');
      div.innerHTML = 'name: ' + item.name + ' url: ' + item.url + 'owner: ' + item.owner.login;
      mainContainer.appendChild(div);
    }
  }
 });
 