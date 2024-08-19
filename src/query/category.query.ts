class CategoryQuery {
  public static getCategories(): string {
    return "SELECT * FROM category";
  }

  public static getCategoryById(): string {
    return `SELECT * FROM category WHERE id = ?`;
  }

  public static createCategory(): string {
    return `INSERT INTO category (name, user_id) VALUES ( ?, ?)`;
  }

  public static updateCategory(): string {
    return `UPDATE category SET name = ? WHERE id = ? AND user_id = ?`;
  }

  public static deleteCategory(): string {
    return `DELETE FROM category WHERE id = ? AND user_id = ?`;
  }
}

export default CategoryQuery;