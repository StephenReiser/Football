import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { fetchPosts } from '../../redux/actions/postActions'
import { testingFunctions } from '../../redux/actions/postActions'

class Posts extends Component {
    componentWillMount () {
        this.props.fetchPosts()
        console.log(`props`, this.props)
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
            console.log(nextProps.newPost)
        }
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return(
            <div>
                <button onClick = {() => this.props.testingFunctions()}>Test Button</button>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object,
    testingFunctions: PropTypes.func,
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    // state.posts is because we named the postreducer
    newPost: state.posts.item
})
export default connect(mapStateToProps, { fetchPosts, testingFunctions })(Posts)