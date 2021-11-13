import React from 'react'
import './posts.styles.scss';
import axios from 'axios';
import Card from "../../components/card/card.component";
import Post from '../../components/post/post.component';
import { Link } from 'react-router-dom';

class Posts extends React.Component {
    constructor(props) {
        super();

        this.state = {
            monster: [],
            monsterPosts: []
        }
    }

    componentDidMount() {
        const monsterId = parseInt(this.props.match.params.monsterId);

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => response.data)
            .then(monsters => this.setState({ monster: monsters.find(monster => monster.id === monsterId) }))

        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.data)
            .then(data => {
                this.setState({ monsterPosts: data.filter(item => monsterId === item.userId) })
                })
    }

    render() {
        return (
          <div className="monster-posts">
              <div className='back-container'>
                <Link to='/' >&#10094; Back</Link>
              </div>
              <h1>Monster's Posts</h1>
              <Card monster={this.state.monster}></Card>
              {
                  this.state.monsterPosts.map(post => <Post key={post.id} post={post}/>)
              }   
          </div>
        )
      }
}

export default Posts;
