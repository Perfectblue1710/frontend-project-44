#!/usr/bin/env node
import runGame from '../src/index.js';
import getRoundData from '../src/games/calc.js';

const description = 'What is the result of the expression?';

runGame(description, getRoundData);