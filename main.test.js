//  import `test` and `expect` functions from Vitest
import { expect, test } from "vitest"
//  import the PH kata functions from main.js
import { damageBuff, teamWeapon } from "./main.js"

describe('damageBuff tests', () => {

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

}
)

describe('teamWeapon tests', () => {

/* TC#7 */
test('Terrorist Weapon only test #1: MAC-10', () => {
   // Arrange
   const input = "MAC-10";
   const expected = `Only Terrorists can equip the ${input}.`;
   // Act
   const result = teamWeapon(input);
   //Assert 
   expect(result).toBe(expected);   
   });

/* TC#8 */
test('Terrorist Weapon only test #2: AK47', () => {
   // Arrange
   const input = "AK47";
   const expected = `Only Terrorists can equip the ${input}.`;
   // Act
   const result = teamWeapon(input);
   //Assert 
   expect(result).toBe(expected);   
   });

/* TC#9 */
test('Counter-Terrorist Weapon only test #1: TMP', () => {
   // Arrange
   const input = "TMP";
   const expected = `Only Counter-Terrorists can equip the ${input}.`;
   // Act
   const result = teamWeapon(input);
   //Assert 
   expect(result).toBe(expected);   
   });

/* TC#10 */ 
test('Counter-Terrorist Weapon only test #2: M4A1 Carbine', () => {
   // Arrange
   const input = "M4A1 Carbine";
   const expected = `Only Counter-Terrorists can equip the ${input}.`;
   // Act
   const result = teamWeapon(input);
   //Assert 
   expect(result).toBe(expected);   
   });

/* TC#11 */ 
test('Both teams Weapon test #1: P90', () => {
   // Arrange
   const input = "P90";
   const expected = `Both teams can equip the ${input}.`;
   // Act
   const result = teamWeapon(input);
   //Assert 
   expect(result).toBe(expected);   
   });

/* TC#12 */ 
test('Both teams Weapon test #2: Smoke Grenade', () => {
   // Arrange
   const input = "Smoke Grenade";
   const expected = `Both teams can equip the ${input}.`;
   // Act
   const result = teamWeapon(input);
   //Assert 
   expect(result).toBe(expected);   
   });

/* TC#12 */ 
test('A Weapon neither team can equip.', () => {
   // Arrange
   const input = "M60";
   const expected = `Neither teams can equip that weapon.`;
   // Act
   const result = teamWeapon(input);
   //Assert 
   expect(result).toBe(expected);   
   });
})