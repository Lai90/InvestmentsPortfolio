import { InvestmentPortfolioPage } from './app.po';

describe('investment-portfolio App', () => {
  let page: InvestmentPortfolioPage;

  beforeEach(() => {
    page = new InvestmentPortfolioPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
