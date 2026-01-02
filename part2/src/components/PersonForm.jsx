const PersonForm = ({ handleAddPerson, newName, handleChangeName, newNumber, handleChangeNumber }) => {
    return (
        <form onSubmit={handleAddPerson}>

            <div>
                name: <input
                    value={newName}
                    onChange={handleChangeName}
                />
            </div>

            <div>

            </div>
            number: <input value={newNumber} onChange={handleChangeNumber} />
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm