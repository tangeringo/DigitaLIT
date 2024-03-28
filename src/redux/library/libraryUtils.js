export const updateSelectedBookItemInfo = (selectedBook, actionBookObj) => {
    const { id, imgSource, name, quantity, price, description } = actionBookObj;
    selectedBook.id = id;
    selectedBook.imgSource = imgSource;
    selectedBook.name = name;
    selectedBook.quantity = quantity;
    selectedBook.price = price;
    selectedBook.description = description;

    return selectedBook;
}