import React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/Errorboundary';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }
    onsearchChange = (e) => {
        this.setState({ searchfield: e.target.value })
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredrobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
            <h1>Cargando Ando...</h1> :
            (
                <div className='tc'>
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchchange={this.onsearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredrobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}
export default App;