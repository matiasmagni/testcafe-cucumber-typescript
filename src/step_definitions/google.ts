import { expect } from 'chai';
import { Given, When, Then } from 'cucumber';
import { $ } from '../utils';

Given(/^Google's search page is opened$/, async function () {
  return (await this.getTestController()).navigateTo('http://google.com');
});

When(/^the user types "(.*)" on Google's search input$/, async function (text: string) {
  return (await this.getTestController()).typeText($('input[name="q"]'), text);
});

When(/^the user press the "(.*)" key on Google's search input$/, async function (text: string) {
  return (await this.getTestController()).pressKey(text);
});

Then(/^the link "(.*)" is the first result shown on Google's results page$/, async function (text: string) {
  const firstLink = $('#rso').find('a');
  const found = await firstLink.innerText;

  expect(found).to.include(text);
});
