import {Component} from 'react'

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
  state = {
    nameInput: '',
    commemtInput: '',
    commentsList: [],
  }

  deleteComment = id => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== id),
    })
  }

  toggleisLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }
        return each
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(each => (
      <CommentItem
        key={each.id}
        commentDetails={each}
        toggleisLike={this.toggleisLike}
        deleteComment={this.deleteComment}
      />
    ))
  }

  onAddcomment = event => {
    event.preventDefault()
    const {nameInput, commemtInput} = this.state
    const bgcolor = `"initial" ${
      containerbgcolor[Math.ceil(Math.random() * containerbgcolor.length - 1)]
    }`

    const newComment = {
      id: v4(),
      name: nameInput,
      commemt: commemtInput,
      date: new Date(),
      isLiked: false,
      initialcolor: bgcolor,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commemtInput: '',
    }))
  }

  onChangeCommentInput = e => {
    this.setState({
      commemtInput: e.target.value,
    })
  }

  onChangeNameinput = e => {
    this.setState({
      commemtInput: e.target.value,
    })
  }

  render() {
    const {nameInput, commemtInput, commentsList} = this.state

    return (
      <div>
        <h1>Comments</h1>
        <form onSubmit={this.onAddcomment}>
          <p>Say Somethimg About 4.0 Technoligies</p>
          <input
            type="text"
            placeholder="Your Name"
            value={nameInput}
            onChange={this.onChangeNameinput}
          />
          <textarea
            placeholder="Your Comment"
            rows="6"
            value={commemtInput}
            onChange={this.onChangeCommentInput}
          />
          <button type="submit">Add Comment</button>
        </form>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
        />
        <hr />
        <p>
          <span>{commentsList.length}</span>Comments
        </p>
        <ul>{this.renderCommentList()}</ul>
      </div>
    )
  }
}

export default Comments
