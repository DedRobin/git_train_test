import styles from './style.css';
import buttonStyle from './components/button.css'

const element = document.getElementById('test');
const button = document.getElementById('button');

element.classList.add(...styles.test2.split(' '));
button.classList.add(...buttonStyle.normal.split(' '));