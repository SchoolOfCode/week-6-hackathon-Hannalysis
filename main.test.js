//  import `test` and `expect` functions from Vitest
import { expect, test } from "vitest"
//  import the PH kata functions from main.js
import { damageBuff } from "./main.js"

 /* TC#1 */
test('Whole positive number (50)', () => {
    // Arrange
    const input = 50;
    const expected = 75;
    // Act
    const result = damageBuff(input);
    //Assert 
    expect(result).toBe(expected);   
    });

 /* TC#2 */
test('Whole positive number, higher amount (100)', () => {
    // Arrange
    const input = 100;
    const expected = 150;
    //Act
    const result = damageBuff(input);
    //Assert
    expect(result).toBe(expected);   
    });

 /* TC#3 */    
test('Whole positive number, min amount (1)', () => {
    // Arrange
    const input = 1;
    const expected = 1.5;
    //Act
    const result = damageBuff(input);
    //Assert
    expect(result).toBe(expected);   
    });

 /* TC#4 */    
 test('When the input is 0, treat it as the min input amount (1)', () => {
    // Arrange
    const input = 0;
    const expected = 1.5;
    //Act
    const result = damageBuff(input);
    //Assert
    expect(result).toBe(expected);   
    });

 /* TC#5 */    
 test('When the input is negative, treat it as the min input amount (1)', () => {
    // Arrange
    const input = -33;
    const expected = 1.5;
    //Act
    const result = damageBuff(input);
    //Assert
    expect(result).toBe(expected);   
    });

 /* TC#6 */    
 test('When the input is a number as a string, it is converted to a number', () => {
    // Arrange
    const input = "50";
    const expected = 75;
    //Act
    const result = damageBuff(input);
    //Assert
    expect(result).toBe(expected);   
    });
