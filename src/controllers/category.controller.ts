import categoryRepository from "../repository/category.repository";

class CategoryController {
  private _repository = categoryRepository;

  public async getCategories(): Promise<ICategory[]> {
    try {
      const categories = await this._repository.getCategories();

      return categories;
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  public async getCategoryById(categoryId: number): Promise<ICategory> {
    try {
      const category = await this._repository.getCategoryById(categoryId);
      return category;
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  public async createCategory(category: ICategory) {
    try {
      const createdCategory = await this._repository.createCategory(category);
      return createdCategory;
    } catch (error: any) {
      throw new Error(error.message)
    }
  }
}

export default new CategoryController()