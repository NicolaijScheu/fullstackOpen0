const Filter = ({filterFunction}) => {
    return (
        <div>Search:
            <input onChange={filterFunction} />
        </div>
    )
}

export default Filter