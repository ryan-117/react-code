import React, { Component } from 'react'
import PropTypes from "prop-types";
class CommentInput extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    }
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }
    UNSAFE_componentWillMount() {
        this._loadUsername()
    }
    componentDidMount() {
        this.textarea.focus()
    }

    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    _saveUsername(username) {
        localStorage.setItem("username", username)
    }
    _loadUsername() {
        const username = localStorage.getItem('username');
        !!username && this.setState({ username })
    }
    handleUsernameBlur(e) {
        this._saveUsername(e.target.value)
    }
    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit() {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createTime: +new Date()
            })
        }
        this.setState({ content: '' })
    }
    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-filed-name">用户名：</span>
                    <div className="comment-field-input">
                        <input onBlur={this.handleUsernameBlur.bind(this)} value={this.state.username} onChange={this.handleUsernameChange.bind(this)} type="text" />
                    </div>
                </div>
                <div className="comment-field">
                    <span className="comment-filed-name">评论内容：</span>
                    <div className="comment-field-input">
                        <textarea ref={textarea => this.textarea = textarea} value={this.state.content} onChange={this.handleContentChange.bind(this)} name="comment-content" id="" cols="30" rows="10"></textarea>
                    </div>
                </div>
                <div className="comment-field-button">
                    <button onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput