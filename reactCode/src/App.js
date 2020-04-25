import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './App.css';
class Editor extends Component {
    constructor() {
        super()
        this.state = {
            content: '<h1>React.js 小书</h1>'
        }
    }

    render() {
        return (
            <div>
                <div className='editor-wrapper' dangerouslySetInnerHTML={{ __html: this.state.content }} />
                <div className='editor-wrapper'>{this.state.content}</div>
            </div>
        )
    }
}
class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired
    };
    render() {
        const { comment } = this.props;
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{comment.username}： </span>
                    <span>{comment.content}</span>
                </div>
            </div>
        )
    }
}
function App() {
    const comment = {
        username: "abc",
        content: "一条评论"
    }
    return (
        <div className="App">
            <Editor />
            <Comment comment={comment} />
        </div>
    );
}

export default App;
