import React, { useState, useEffect } from 'react';
import api from '../api'


function App() {

    const [listaAlunos, setListaAlunos] = useState([]);

    useEffect( () => {
        api.get('alunos').then(({data}) => {
            setListaAlunos(data)
        });
        console.log(listaAlunos)
    }, ['']);

    const [aluno1] = listaAlunos

    return (
        <h1>{aluno1}</h1>
    )
}

export default App;