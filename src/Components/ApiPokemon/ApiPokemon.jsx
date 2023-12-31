import React, { useEffect, useState } from 'react'
import './style.css'

function ApiPokemon() {
    const [selectPokemon, setSelectPokemon] = useState("pikachu")
    const [pokemon, setPokemon] = useState()
    const [error, setError] = useState(false)


    async function loadApi(e) {
        e?.preventDefault()
        let url = `https://pokeapi.co/api/v2/pokemon/${selectPokemon ? selectPokemon : 'pikachu'}`
        await fetch(url)
            .then(response => response.json())
            .then(json => {
                setPokemon(json)
                setSelectPokemon("")
                if (error) {
                    setError(false)
                }
            })
            .catch(error => {
                console.log(error)
                setError(true)
            })
    }

    useEffect(() => {
        loadApi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div className='container'>
            <header>
                <strong>PokéDex</strong>
            </header>

            <div style={{ marginTop: 50, color: 'black', display: 'flex', flexDirection:'column', alignItems:'center' }}>
                <div style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>
                    <form onSubmit={loadApi}>
                        <input required type="text" placeholder='Nome do pokemon' value={selectPokemon} alt="" onChange={(text) => setSelectPokemon(text.target.value)} />
                        <button type='submit' style={{ marginLeft: 20, cursor: 'pointer' }}>Buscar</button>
                    </form>
                </div>
                {error && <p style={{ color: 'red', fontSize: 12 }}>Este pokemon nao exite, verifique a ortografia e lembre-se de colocar tudo minúsculo</p>}
                <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} style={{ width: 150 }} />
                <div style={{color:'white', fontSize:20, textAlign:'center', fontWeight:600, fontFamily:'cursive'}}>
                    <div>Name: {pokemon?.name}</div>
                    <div>Nº: {pokemon?.id}</div>
                    <div>Peso: {pokemon?.weight / 10}</div>
                    <div>Altura: {pokemon?.height / 10}</div>
                </div>
            </div>
        </div>
    )
}

export default ApiPokemon