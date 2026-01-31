🎭 Playwright End-to-End Test Automation Project

This repository contains an end-to-end test automation setup developed using Microsoft Playwright and Node.js. The purpose of this project is to implement reliable, maintainable, and scalable UI testing for modern web applications.

The framework is structured to support clean test organization, reusable components, and cross-browser execution while keeping the setup simple and efficient for further expansion.



🚀Project Purpose

The goal of this project is to:

Automate UI and functional testing of web applications

Provide a reusable Playwright test structure

Enable cross-browser testing with minimal configuration

Maintain clear test reporting and execution results

Follow best practices in test automation architecture



🧰Technologies Used

Microsoft Playwright

Node.js

JavaScript

npm



📁Folder Structure

tests/              Test cases and test scripts
test-results/       Execution results and reports
playwright.config   Playwright configuration file
package.json        Project dependencies


1️⃣Clone the repository
git clone https://github.com/LithiraLiyanage/PlayWright-Assignment.git
cd PlayWright-Assignment


2️⃣Install dependencies
npm install



3️⃣Install Playwright browsers
npx playwright install


▶️Running the Tests
Run all tests:

npx playwright test



Run tests in headed mode:

npx playwright test --headed



Run a specific test file:

npx playwright test tests/yourTestFile.spec.js



📊Viewing Test Reports

After executing tests, view the HTML report using:

npx playwright show-report




🌐Browser Support

Tests are configured to run on:

Chromium

Firefox

WebKit

This can be customized from the Playwright configuration file.




⭐Notes

The node_modules directory is intentionally excluded from version control.

Dependencies are managed through package.json and can be restored using npm install.

The framework is designed to be easily extendable for larger test suites.



👨‍💻Maintainer

IT23658318
