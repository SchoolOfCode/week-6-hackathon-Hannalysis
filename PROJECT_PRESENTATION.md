Room: 10  
Name: Hannah Watts  
Link: https://github.com/SchoolOfCode/week-6-hackathon-Hannalysis  
  
# Team: MAC-10
# Counter Strike: Code Katas

Overview: An easy and a more challenging Kata thematically based on Counter Strike: Source
2 of 4 challenges are provided inside this repo.

For the other two challenges, please visit and download my teammates repo here:  
https://github.com/SchoolOfCode/week-6-hackathon-fergus-g 

------------

## Installation

Inside your VScode terminal, enter the following:

```bash
  npm install --save-dev vitest
```
    
## Challenges & Context

Kata 1 [Easy] : Damager Modifier Challenge: damageBuff

Kata 2: [Challenging] Team Weapon Sorter: teamWeapon



To check whether you have succeeded the challenge, ensure to type in the following command inside the terminal:

```bash
  npm vitest
```

<h2 align = "center">Documentation</h2>

  <h4 align = "center">Fist to Five - Fergus: Green | Hannah: Light Blue</h4>
<p align="center">
  <img src="Fist_or_Five_approach.JPG" alt="Fist to Five Table">
</p>

------------

<h3 align = "center"><u>Decision Table</u></h3>

<h4 align = "center"><i>For teamWeapon Kata only</i></h4>

<p align="center">
  <img src="Small_Decision_Table_for_Hannah_Kata2.JPG" alt="Small Decision Table for 2nd Kata">
</p>

------------

<h3><u>Boundary Analysis Tables</u></h3>

<h4><i>damageBuff Kata</i></h4>

|       | Test Case                               | Input | Output |
| ----- | --------------------------------------- | ----- | ------ |
| TC#1  | A positive number                       | 50    | 75     |
| TC#2  | Another positive number, higher amount  | 100   | 150    |
| TC#3  | Another positive number, minimum amount | 1     | 1.5    |
| TC#4  | When input is 0                         | 0     | 1.5    |
| TC#5  | When input is negative numbers          | -33   | 1.5    |
| TC#6  | When input number is posed as a string  | "50"  | 75     |




<h4><i>teamWeapon Kata</i></h4>

|        | Test Case                            | Input           | Output                                                |
| ------ | ------------------------------------ | --------------- | ----------------------------------------------------- |
| TC#7   | Terrorist only weapon test 1         | "MAC-10"        | "Only Terrorists can equip the MAC-10."               |
| TC#8   | Terrorist only weapon test 2         | "AK47"          | "Only Terrorists can equip the AK47."                 |
| TC#9   | Counter-Terrorist only weapon test 1 | "TMP"           | "Only Counter-Terrorists can equip the TMP."          |
| TC#10  | Counter-Terrorist only weapon test 2 | "M4A1 Carbine"  | "Only Counter-Terrorists can equip the M4A1 Carbine." |
| TC#11  | Both teams weapon test 1             | "P90"           | "Both teams can equip the P90."                       |
| TC#12  | Both teams weapon test 2             | "Smoke Grenade" | "Both teams can equip the Smoke Grenade."             |
| TC#13  | A weapon neither team can equip      | "M60"           | "Neither teams can equip that weapon."                |  
  
  
------------

## Other Information
  
[Hackathon Presentation Slides](https://docs.google.com/presentation/d/14X5ZMeJhEti9xj3a1icfa0fRYYU1DRUraRPhlI4s0f4/edit?usp=sharing)  
  
------------