export default function Task({ id, title, completed, onToggle, onDelete}){
    return(
        <div className="flex itmes-center justify-between p-4 bg-purple-300 mb-2 rounded shadow">
            <span className={ completed ? "line-through text-gray-500": ""}>
                {title}
            </span>
            
             <div className="flex gap-2">
                <button className={`px-3 py-1 rounded ${completed ? "bg-green-200": "bg-blue-200"}`} onClick={() => onToggle(id)}>
                {completed ? "Undo": "Done"}
                 </button>

                <button className="bg-red-300 px-3 py-1 rounded" onClick={() => onDelete(id)}>
                    Delete
                </button>
             </div>
        </div>
    )
}