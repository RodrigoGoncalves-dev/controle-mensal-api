import query from '../query/category.query';
import connect from '../database/conn';


class CategoryRepository {
  async getCategories(): Promise<ICategory[]> {
    const conn = await connect;
    try {
      const [rows] = await conn.query(query.getCategories());

      if(Array.isArray(rows) && rows.length > 0) {
        return rows as ICategory[];
      } else {
        throw new Error("CATEGORY_NOT_FOUND");
      }
    }
    catch (error: any) {
      throw new Error( error.message || error );
    }
  }

  async createCategory(category: ICategory) {
    const conn = await connect;
    try {
      const [rows] = await conn.query(
        query.createCategory(), 
        [category.name, category.user_id]
      );

      if(Array.isArray(rows) && rows.length > 0) {
        return rows[0] as ICategory;
      } else {
        throw new Error("CATEGORY_NOT_FOUND");
      }
    } catch (error: any) {
      throw new Error(error.message || error);
    }
  }

  async getCategoryById(categoryId: number): Promise<ICategory> {
    const conn = await connect;
    try {
      const [rows] = await conn.query(query.getCategoryById(), [categoryId]);
      if(Array.isArray(rows) && rows.length > 0) {
        return rows[0] as ICategory;
      } else {
        throw new Error("CATEGORY_NOT_FOUND");
      }
    } catch (error: any) {
      throw new Error(error.message || error);
    }
  }
}

export default new CategoryRepository();