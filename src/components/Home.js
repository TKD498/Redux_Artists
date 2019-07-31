import React, {Component} from 'react';

import axios from 'axios';
import Search from './Search';
import ArtistsLists from './ArtistList';

class Home extends Component{
    state = {
        artists: []
    }

    componentWillMount(){
        axios.get("http://localhost:3004/artists")
            .then((response)=>{
                this.setState({
                    artists : response.data
                })
            })
            .catch((err)=> console.log(err))
    }

    getKeywords = (event)=>{
        let key = event.target.value;
        console.log(key);
    }
    render(){
        return(
            <div>
                <Search keywords = {this.getKeywords}/>
                <ArtistsLists artists={this.state.artists} />
            </div>
        )
    }
}

export default Home;