import { connect } from 'react-redux';
import AddMenuItem from '../components/addMenuItem'

function mapStoreToProps(store) {
    return {
        name: store.AddMenuItem.name,
        price: store.AddMenuItem.price,
        description: store.AddMenuItem.description,
        category: store.AddMenuItem.category,
        restaurantId: store.AddMenuItem.activeRestaurant
    };
}

export default connect(mapStoreToProps)(AddMenuItem);