import {Component} from 'react'

import './index.css'

import {v4} from 'uuid'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentList: []}

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(preState => ({
      commentList: [...preState.commentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  deleteComment = commentId => {
    const {commentList} = this.state

    this.setState({
      commentList: commentList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsLike = id => {
    this.setState(preState => ({
      commentList: preState.commentList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {nameInput, commentInput, commentList} = this.state

    return (
      <div className="app-container">
        <div className="comment-container">
          <h1 className="heading">Comments</h1>
          <div className="comment-input">
            <form className="comments-form" onSubmit={this.onAddComment}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                value={nameInput}
                onChange={this.onChangeNameInput}
                className="name-input"
                placeholder="Your Name"
                type="text"
              />
              <textarea
                value={commentInput}
                placeholder="Your Comment"
                onChange={this.onChangeCommentInput}
                className="input-comment"
                rows="6"
              />
              <button className="add-button" type="submit">
                Add Comment
              </button>
            </form>
            <img
              alt="comments"
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            />
          </div>
          <hr className="line" />
          <p className="comment-count-heading">
            <span className="comment-count">{commentList.length}</span>
            Add Comment
          </p>
          <ul>
            {commentList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                deleteComment={this.deleteComment}
                toggleIsLike={this.toggleIsLike}
                commentDetails={eachComment}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
