
const SeacrhBox = ({ value, setFilter }) => {
    return (
        <div>
            <h5>Find your contacts by name</h5>
            <input onChange={(event) => setFilter(event.target.value)} value={value} type="text" placeholder="Elli"/>
        </div>
    );
}

export default SeacrhBox;