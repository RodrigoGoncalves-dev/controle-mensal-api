import connect from "../database/conn";
import query from "../query/item.query";

class ItemRepository {

  async createItem(item: IItem): Promise<boolean> {
    const conn = await connect;
    try {
      const [rows] = await conn.query(
        query.createItem(),
        [item.category_id, item.name, item.description, item.price]
      );

      if (Array.isArray(rows) && rows.length > 0) {
        return true;
      } else {
        throw new Error("ITEM_NOT_FOUND");
      }
    } catch (error: any) {
      throw new Error(error.message || error);
    }
  }

  async getItems(): Promise<IItem[]> {
    const conn = await connect;
    try {
      const [rows] = await conn.query(query.getItems());
      if (Array.isArray(rows) && rows.length > 0) {
        return rows as IItem[];
      } else {
        throw new Error("ITEM_NOT_FOUND");
      }
    } catch (error: any) {
      throw new Error(error.message || error);
    }
  }

  async getItemById(itemId: number): Promise<IItem> {
    const conn = await connect;
    try {
      const [rows] = await conn.query(query.getItemById(), [itemId]);
      if (Array.isArray(rows) && rows.length > 0) {
        return rows[0] as IItem;
      } else {
        throw new Error("ITEM_NOT_FOUND");
      }
    } catch (error: any) {
      throw new Error(error.message || error);
    }
  }

  async deleteItem(itemId: number): Promise<boolean> {
    const conn = await connect;
    try {
      const [rows] = await conn.query(query.deleteItem(), [itemId]);
      if (Array.isArray(rows) && rows.length > 0) {
        return true;
      } else {
        throw new Error("ITEM_NOT_FOUND");
      }
    } catch (error: any) {
      throw new Error(error.message || error);
    }
  }

  async updateItem(item: IItem): Promise<IItem> {
    const conn = await connect;
    try {
      const [rows] = await conn.query(
        query.updateItem(), 
        [ item.category_id, item.name, item.description, item.price, item.id ]
      );

      if (Array.isArray(rows) && rows.length > 0) {
        return rows[0] as IItem;
      } else {
        throw new Error("ITEM_NOT_FOUND");
      } 
    } catch (error: any) {
      throw new Error(error.message || error);
    }
  }
}

export default new ItemRepository();