import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails, deleteComment, toggleIsLike} = props
  const {name, comment, date, isLiked, id, initialClassName} = commentDetails
  const postedTime = formatDistanceToNow(date)

  const initial = name ? name[0].toUpperCase() : ''

  const likeTextClassName = isLiked ? 'button active' : 'button'

  const isLikedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onDeleteComment = () => {
    deleteComment(id)
  }
  const onlikeComment = () => {
    toggleIsLike(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container ">
            <p className="username">{name}</p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={isLikedImage} alt="like" className="like-image" />
          <button
            onClick={onlikeComment}
            className={likeTextClassName}
            type="button"
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onDeleteComment}
          testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>

      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
