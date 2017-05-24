import { GroceryListAndRecipeAppPage } from './app.po';

describe('grocery-list-and-recipe-app App', () => {
  let page: GroceryListAndRecipeAppPage;

  beforeEach(() => {
    page = new GroceryListAndRecipeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
