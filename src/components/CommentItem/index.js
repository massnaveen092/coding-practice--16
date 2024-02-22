// Write your code here
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails} = props
  const {date, name, comment, id, initialclassname, isLiked} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const LikeTextClassName = isLiked ? 'button' : 'button2'
  const imageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleisLike} = props
    toggleisLike(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <l1>
      <div className={initialclassname}>
        <p>{initial}</p>
      </div>
      <div>
        <p>{name}</p>
        <p>{postedTime} ago</p>
        <p>{comment}</p>
      </div>
      <div>
        <img src={imageUrl} alt="like" />
        <button
          type="button"
          onClick={onClickLike}
          className={LikeTextClassName}
        >
          Like
        </button>
        <button type="button" onClick={onDeleteComment} data-testid="delete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </l1>
  )
}

export default CommentItem
