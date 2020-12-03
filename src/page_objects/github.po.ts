import { $ } from '../utils';

export class GithubPage {
  private url = 'https://github.com/';
  private repoListItem: Selector = $('.repo-list-item');
  private loginErrorMessage: Selector = $('#js-flash-container > div > div');
  private searchInput: Selector = $('.header-search-input');

  getUrl() {
    return this.url;
  }

  getSearchInput(): Selector {
    return this.searchInput;
  }

  getFirstSearchResult(): Promise<string> {
    return this.repoListItem.nth(0).innerText;
  }

  getLoginErrorMessage() {
    return this.loginErrorMessage.innerText;
  }
}
