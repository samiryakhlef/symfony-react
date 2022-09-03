// import { Controller } from '@hotwired/stimulus';

// /*
//  * This is an example Stimulus controller!
//  *
//  * Any element with a data-controller="hello" attribute will cause
//  * this controller to be executed. The name "hello" comes from the filename:
//  * hello_controller.js -> "hello"
//  *
//  * Delete this file or adapt it for your use!
//  */
// export default class extends Controller {
//     connect() {
//         this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
//     }
// }
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Component/navbar/Navbar';
class App extends React.Component {
    render() {
        return (
            <section>
                <Navbar />
            </section>
        );
    }
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
