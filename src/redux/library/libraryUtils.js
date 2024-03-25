export const updateSelectedBookItemInfo = (selectedBook, actionBookObj) => {
    const { id, imgSource, name, price, description } = actionBookObj;
    selectedBook.id = id;
    selectedBook.imgSource = imgSource;
    selectedBook.name = name;
    selectedBook.price = price;
    selectedBook.description = description;

    return selectedBook;
}