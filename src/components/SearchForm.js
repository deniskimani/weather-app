/* eslint-disable consistent-return */
function SearchForm({ searchText, setSearchText, onsubmit }) {
  const handleInputChange = (event) => setSearchText(event.target.value);

  return (
    <div className="search-form">
      <input type="text" value={searchText} onChange={handleInputChange} />
      <button type="submit" onClick={onsubmit}>
        Search
      </button>
    </div>
  );
}
export default SearchForm;
