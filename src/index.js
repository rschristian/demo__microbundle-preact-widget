import { h, render } from 'preact';
import styles from './style.css';

(function initStyles() {
    const style = document.createElement('style');
    style.innerText = styles;
    document.head.appendChild(style);
})()


export function MyComponent() {
    return <h1>Hello World</h1>;
}

render(<MyComponent />, document.getElementById('demo-widget'));
