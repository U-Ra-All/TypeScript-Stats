import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

// Create an object that implements the DataReader interface
const csvFileReader = new CsvFileReader('football.csv');

// Create an object of MatchReader and pass DataReader implementation
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// matchReader.matches



console.log(`Man United won ${manUnitedWins} times.`);