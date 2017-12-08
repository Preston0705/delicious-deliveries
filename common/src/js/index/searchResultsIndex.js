import { connect } from 'react-redux';
import SearchResults from '../components/searchResults';

function mapStoreToProps(store) {
  return {
    restaurants: store.initialSearch.restaurants,
    location: store.initialSearch.location,
    activeOwner: store.login.activeOwner,
    activeCustomer: store.login.activeCustomer
  };
}

export default connect(mapStoreToProps)(SearchResults);