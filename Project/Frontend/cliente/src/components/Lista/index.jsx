function Lista({itens}) {
    return(
        <>
            <h3>Lista de Coisas boas:</h3>
            {
                itens.map((item) => (
                    <p>{item}</p>
                ))
            }
        </>
    )
}

export default Lista