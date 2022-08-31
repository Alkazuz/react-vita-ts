import React, { useEffect, useState } from 'react';

import api from '/src/services/api.ts';

const Todos: React.FC = () => {

    const [todos, setTodos] = useState([])
    const [loading, setLoading]  = useState(true)

    useEffect(() => {
        let consultaAPI = async () =>{
            let req = await api.get('/todos')
            setTodos(req.data)
            setLoading(false)
        }

        if(loading){
            consultaAPI();
        }
    })

    return (
        <>
            <div className="todos_container">
               {todos.map(todo =>  (
                    <div className="todos">
                        <span>{todo.title}</span> - <a> {
                            todo.completed ? 'Concluido' : 'Incompleto'
                        }
                        </a>
                    </div>

               ))}
            </div>
        </>
    );
}

export default Todos;