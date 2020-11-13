import { expect } from 'chai';
import { Given, When, Then } from 'cucumber';
import { $ } from '../utils';

Given(/^Google's search page is opened$/, async function () {
  return (await this.getTestController()).navigateTo('http://google.com');
});

When(/^"(.*)" is typed on Google's search input$/, async function (text: string) {
  return (await this.getTestController()).typeText($('input[name="q"]'), text);
});

When(/^"(.*)" key is pressed on Google's search input$/, async function (text: string) {
  return (await this.getTestController()).pressKey(text);
});

Then(/^the first result is "(.*)" on Google's results page$/, async function (text: string) {
  const firstLink = $('#rso').find('a');
  const found = await firstLink.innerText;

  expect(found).to.include(text);
});
