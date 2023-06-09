# CypressChallenge

- How to run the tests:
```
$ npx cypress open
```
- Project structure: The project was created using BDD and page obejcts pattern, We have isolated actions, elements and steps page. The BDD find the step on steps folder according to the configuration of the project, inside the step, we have a call to the method inside actions page, and inside the method we have the call of the element and the action.


```