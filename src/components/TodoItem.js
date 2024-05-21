import React from "react"
import propTypes from "prop-types"
import Button from "./Button"
const TodoItem = ({ todo, del }) => {

    //fungsi ketika tombol delete di tekan
    const delById = (id) => {
        del(id)
    }

    return (
        <div style={todoItem} >
            <p> {todo.title} </p>
            <div>
            <Button text="Edit" variant="success" action={() => (true)} />
                <Button text="Hapus" variant="warning" action={() => delById(todo.id)} />
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: propTypes.object.isRequired,
    del: propTypes.func.isRequired
}
export default TodoItem;
const todoItem = {
    background: "#2da4f8",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    height: "3rem",
    padding: "0 1rem",
    justifyContent: "space-between",
    margin: "0.5rem 0"
}



