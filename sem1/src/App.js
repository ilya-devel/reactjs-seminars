import logo from './logo.svg';
import './App.css';

import CurrentTime from './myComponent/CurrentTime';
import Greeting from './myComponent/Greeting';
import { EventCard } from './myComponent/EventCard/EventCard';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Greeting />
                <CurrentTime />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    This is new project by ReactJS
                </p>
                <div className='cards'>
                    <EventCard title="test1" date="testDate1" place="testPlace1" />
                    <EventCard title="test2" date="testDate2" place="testPlace2" />
                    <EventCard title="test3" date="testDate3" place="testPlace3" />
                </div>
            </header>
        </div>
    );
}

export default App;
