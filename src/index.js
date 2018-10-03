// TODO: Render the `App` component to the DOM
import App from './components/App.js';
ReactDOM.render(<App/>, document.getElementById('app'));

// set State
// Top-down state.
/* 
State vs props comes down to if you have a dynamic component
props don't require your app to rerender
state does 

React calls the render function for you.
*/