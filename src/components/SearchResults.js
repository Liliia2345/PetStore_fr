const SearchResults = ({ searchResults }) => {
  return (
    <div>
      {searchResults.map((pet) => (
        <div key={pet._id}>
          <p>{pet.animalType}</p>
          <p>{pet.breed}</p>
          <p>{pet.size}</p>
          <p>{pet.age}</p>
          <p>{pet.gender}</p>
          <p>{pet.playfulness}</p>
          <p>{pet.care}</p>
          <img src={pet.image} alt={`${pet.breed} ${pet.animalType}`} />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
