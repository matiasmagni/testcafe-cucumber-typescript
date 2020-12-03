import { expect } from 'chai';
import { Given, When, Then } from 'cucumber';
import { GithubPage } from '../page_objects/github.po';

const githubPage: GithubPage = new GithubPage();

Given(/^GitHub page is opened$/, async function () {
  return (await this.getTestController()).navigateTo(githubPage.getUrl());
});

When(/^the user types "([^"]*)" on Search GitHub's input on GitHub page$/, async function (text: string) {
  return (await this.getTestController()).typeText(githubPage.getSearchInput(), text);
});

When(/^the user press the "(.*)" key on Search GitHub's input on GitHub page$/, async function (text: string) {
  return (await this.getTestController()).pressKey(text);
});

Then(/^the link "(.*)" is the first result on GitHub's results page$/, async function (text: string) {
  // FAILS on PURPOSE -> so you can see the screenshot in the report
  expect(githubPage.getFirstSearchResult()).to.contain(text, 'First result is different from expected one!');
});
