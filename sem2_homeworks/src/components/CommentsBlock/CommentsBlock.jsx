import './CommentsBlock.sass'

import { useRef, useState } from "react"

const CommentsBlock = () => {
    const [lstComments, setLstComments] = useState([
        { id: crypto.randomUUID(), comment: "Временный комментарий" }
    ])

    const inputComment = useRef(null)

    const delComment = (id) => {
        setLstComments(lstComments.filter(element => element.id !== id))
        console.log(`Comment #${id} removed`)
    }

    const addNewComment = () => {
        if (inputComment.current.value != '') {
            setLstComments([...lstComments, {
                id: crypto.randomUUID(),
                comment: inputComment.current.value
            }])
            inputComment.current.value = ''
        }
    }

    const showComments = () => {
        return lstComments.map((comment) => {
            return (<div className='comment' key={comment.id} comment-id={comment.id}>
                <div>{comment.comment}</div>
                <div className='closeIcon' onClick={(e) => {
                    let id = e.target
                    while (!id.classList.contains('comment')) {
                        id = id.parentElement
                    }
                    delComment(id.getAttribute('comment-id'))
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                    </svg>
                </div>
            </div>)
        })
    }

    return <>
        <div className='newCommentBlock'>
            <div className="subheader">Новый комментарий</div>
            <textarea name="newComment" id="newComment" cols="60" rows="5" ref={inputComment}></textarea>
            <button className='addNewComment' onClick={addNewComment}>Отправить</button>
        </div>
        <div className='commentsBlock'>
            {lstComments.length > 0 ? showComments() : <h3>Нет ни одного комментария</h3>}
        </div>
    </>
}

export default CommentsBlock