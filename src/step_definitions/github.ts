import { expect } from 'chai';
import { Given, When, Then } from 'cucumber';
import { GithubPage } from '../page_objects/github.po';

const githubPage: GithubPage = new GithubPage();

Given(/^GitHub page is opened$/, async function () {
  return (await this.getTestController()).navigateTo(githubPage.url());
});

When(/^"([^"]*)" is typed on Search GitHub's input on GitHub page$/, async function (text) {
  return (await this.getTestController()).typeText(githubPage.searchButton(), text);
});

When(/^"(.*)" key is pressed on Search GitHub's input on GitHub page$/, async function (text) {
  return (await this.getTestController()).pressKey(text);
});

Then(/^the first GitHub's result is "(.*)" on GitHub's results page$/, async function (text) {
  // FAILS on PURPOSE -> so you can see the screenshot in the report
  expect(githubPage.firstSearchResult().innerText).to.contain(text);
});
