class ItemQuery {

  public static getItemById(): string {
    return `SELECT * FROM items WHERE id = ? AND category_id = ?`;
  }

  public static getItems(): string {
    return `SELECT * FROM items WHERE category_id = ?`;
  }

  public static createItem(): string {
    return `INSERT INTO items (category_id, name, description, price) VALUES (?, ?, ?, ?)`;
  }

  public static updateItem(): string {
    return `UPDATE items SET name = ?, description = ?, price = ? WHERE id = ? AND category_id = ?`;
  }

  public static deleteItem(): string {
    return `DELETE FROM items WHERE id = ? AND category_id = ?`;
  }
}

export default ItemQuery;