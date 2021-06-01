"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
// Create an object that implements the DataReader interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
// Create an object of MatchReader and pass DataReader implementation
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches
console.log("Man United won " + manUnitedWins + " times.");
