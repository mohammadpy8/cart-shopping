const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id);
    return result
};

const quantityCounter = (state, id) => {
    const Index = state.selectedItems.findIndex(item => item.id === id);
    if (Index === -1) {
        return false;
    } else {
        return state.selectedItems[Index].quantity;
    }
};

export { isInCart, quantityCounter };