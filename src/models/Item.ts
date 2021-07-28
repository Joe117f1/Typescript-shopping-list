class Item {
    id: string;
    text: string;

    constructor(itemText: string) {
        this.id = new Date().toISOString();
        this.text = itemText;
    }
};

export default Item;