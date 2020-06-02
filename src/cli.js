#!/usr/bin/env node
'use strict'
const path = require('path');
const meow = require('meow');
const termImg = require('term-img');
const terminalImage = require('terminal-image');
const importJsx = require('import-jsx');
const React = require('react');
const { render } = require('ink');

const ui = importJsx('./ui');
const { userName, imgSize, imgFileName } = require("./const");

const width = imgSize.width ? imgSize.width : '20px';
const height = imgSize.height ? imgSize.height : "20px";

meow(`
	Usage
	  $ ${userName}
`);

const fallback = async () => {
  return await terminalImage.file(path.join(__dirname, imgFileName));
};

const img = termImg(path.join(__dirname, imgFileName), { width: width, height: height, fallback });
console.log(img);

render(React.createElement(ui));
