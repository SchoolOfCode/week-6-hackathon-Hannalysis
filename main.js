/* --- Counter Strike: Code Katas --- */

 /* --- Kata 1 [Easy] --- */
// Ah, so you're fresh meat for our ranks! We'll be kind to you as it's your first day on the field.
// Go create yourself a damage modifier maggot! I hope you can read, as the damageBuff requirements are listed below:
/* 
- Whatever your base damage, the damageBuff mod will buff you by 50% 
- This is not rounded up or down
- If for some reason your base damage is non-existant (or heavens-forbid, minus figures) the mod will reassign that base value to the minimum accepted value (1).
- In the unfortunate rare event that a number posing as a string is passed through your mod, it will treat it as a numeral value 
*/

export function damageBuff (playerDamage) {
// enter code here ready to test against

// return playerDamage with increased buff amount
}

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
/* --- Kata 2 [Challenging] --- */
// Great! You've somehow beaten 92.5% of previous wannabe recruits by completing the first Kata.
// Most also get confused on what team they should even be playing for most of the time!
// Using the table below, I need you to create a method to return the team that is allowed to utilise the selected weapon.
// Accepted return responses are: 
// "Only Terrorists can equip the [weapon name]." | "Only Counter-Terrorists can equip the [weapon name]." | "Both teams can equip the [weapon name]." | "Neither teams can equip the [weapon name]."
// So, help your fellow comrades before they even get onto the battlefield! 
/*
| Weapon Name   | Terrorist | Counter-Terrorist |
| ------------- | --------- | ----------------- |
| MAC-10        | Y         | N                 |
| TMP           | N         | Y                 |
| P90           | Y         | Y                 |
| AK47          | Y         | N                 |
| M4A1 Carbine  | N         | Y                 |
| Smoke Grenade | Y         | Y                 | 
*/


export function teamWeapon (weapon) {
    // enter code here ready to test against

    // return the team that is able to utilize that weapon
    }