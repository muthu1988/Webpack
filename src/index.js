import _ from 'lodash';
import './style.css';
import Butterfly from './butterfly.png';
function component() {
    var element = document.createElement('div');  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src = Butterfly;
    element.appendChild(myIcon);
    return element;
  }
  
  document.body.appendChild(component());