import itemRepository from "../repository/item.repository";

class ItemController {

  private _repository = itemRepository;

  async getItems(): Promise<IItem[]> {
    try {
      const items = await this._repository.getItems();
    return items;
    } catch (error) {
      throw new Error();
    }
  }

  async getItemById(itemId: number): Promise<IItem> {
    try {
      const item = await this._repository.getItemById(itemId);
    return item;
    } catch (error) {
      throw new Error();
    }
  }

  async deleteItem(itemId: number): Promise<boolean> {
    try {
      const item = await this._repository.deleteItem(itemId);
    return item;
    } catch (error) {
      throw new Error();
    }
  }

  async createItem(item: IItem): Promise<boolean> {
    try {
      const created = await this._repository.createItem(item);
      return created;
    } catch (error) {
      throw new Error();
    }
  }

  async updateItem(item: IItem): Promise<IItem> {
    try {
      const updated = await this._repository.updateItem(item);
      return updated;
    } catch (error) {
      throw new Error();
    }
  }
}