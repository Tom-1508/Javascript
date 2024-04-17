# Prtoject Related to DOM

## Project Link :
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution Code
### Project 1 
```javascript
const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');
const h2 = document.querySelectorAll('h2');
// console.log(h2)
h2.forEach((h2) => {
  h2.style.color = '#fff';
});

body.style.backgroundColor = '#212121';

buttons.forEach((button) => {
  // console.log(button)
  button.addEventListener('click', (e) => {
    // console.log(e)
    // console.log(e.target)
    // if(e.target.id === "grey"){
    //     // body.style.backgroundColor = "grey" // hardCoded
    //     body.style.backgroundColor = e.target.id // best software engineering practice
    // }
    // if(e.target.id === "white"){
    //     body.style.backgroundColor = e.target.id
    // }
    // if(e.target.id === "blue"){
    //     body.style.backgroundColor = e.target.id
    // }
    // if(e.target.id === "yellow"){
    //     body.style.backgroundColor = e.target.id
    // }

    // using switch case

    let targetButton = e.target.id;

    switch (targetButton) {
      case 'grey':
        body.style.backgroundColor = targetButton;
        break;
      case 'white':
        body.style.backgroundColor = targetButton;
        break;
      case 'blue':
        body.style.backgroundColor = targetButton;
        break;
      case 'yellow':
        body.style.backgroundColor = targetButton;
        break;
      default:
        console.log('wrong clicks');
        break;
    }
  });
});
```

### Project 2
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please enter a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please enter a valid height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(bmi);
    if (bmi < 18.6) {
      results.innerHTML = `Under Weight ${bmi}`;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `Normal weight ${bmi}`;
    } else {
      results.innerHTML = `Over weight ${bmi}`;
    }
  }
});
```

### Project 3
```javascript
const clock = document.getElementById('clock');

setInterval(() => {
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  // clock.style.fontSize = "40px"
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```