import React, { useState } from 'react'



function Cadastro() {
    const [dataUser, setDataUser] = useState([])
    const handleRegistro = (e) => {
        e.preventDefault()
        const [inputNome, inputEmail, inputIdade] = e.target
        const data = {
            name: inputNome.value,
            email: inputEmail.value,
            idade: inputIdade.value
        }
        setDataUser([...dataUser, data])
        e.target[0].value = null
        e.target[1].value = null
        e.target[2].value = null
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <form onSubmit={handleRegistro} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <label>
                    <p>Nome:</p>
                    <input type='text' placeholder='Nome' required={true} minLength={5} />
                </label>

                <label>
                    <p>Email:</p>
                    <input type='email' placeholder='Email' required={true} minLength={5} />
                </label>

                <label>
                    <pA>Idade:</pA>
                    <input type='number' placeholder='Idade' required={true} minLength={5} />
                </label>
                <button type='submit' style={{ cursor: 'pointer' }}>Registrar</button>
            </form>



            <div style={{ marginTop: 30 }}>
                {dataUser.map((user, index) => {
                    return (
                        <div key={index} style={{ marginTop: 15 }}>
                            <p>Nome: <span>{user.name}</span></p>
                            <p>Email: <span>{user.email}</span></p>
                            <p>Idade: <span>{user.idade}</span></p>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Cadastro