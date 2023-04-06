function LocationDetails(props) {
  const { location } = props;
  return <h1>{`${location.city}, ${location.country}`}</h1>;
}
export default LocationDetails;
