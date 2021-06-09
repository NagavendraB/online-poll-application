# Online Poll Application (React, Redux)

## Summary

This application allow users vote through the Polls API(http://docs.pollsapi.apiary.io/). 

### Details
- This application contains three pages
    1. List of Questions Page.
    2. Question Detail page.
    3. New Question page.
- List of Questions Page will displays the list of questions in a grid by reading the data from the polls API.
- By clicking on any of the Question will navigate to question detail page.
- Question Details page displays the Question followed by its choices, so we can vote for specific choice by clicking on the "Save Vote" button corresponding to that choice.
- We can also add the new question by clicking on "Add Question" button in the Questions page.
- create-react-app is used to build this app.

## Dependency
* Node version 14+
* yarn

### Get it running
Below are the steps to get it running.

 - Install all the dependences in the application by using the command ``` yarn ```
 - Then start the application in another terminal by using command ``` yarn start ```
 - Run the tests using command ``` yarn test ```

## Sample screens
### Questions:
![image](https://user-images.githubusercontent.com/22505966/121275634-77482600-c8cd-11eb-8f59-3cc2083e275b.png)


### Question details:
![image](https://user-images.githubusercontent.com/22505966/121275740-a199e380-c8cd-11eb-886c-15ad763340ae.png)

### Add Question:
![image](https://user-images.githubusercontent.com/22505966/121275790-b70f0d80-c8cd-11eb-8277-4b20d9b25bf2.png)
