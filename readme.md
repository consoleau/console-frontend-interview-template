# Overview

This repo consists of a trivial class and mocha test. The purpose of this module is to verify that a given laptop environment is setup to run our code challenge questions before a technical interview.

# Prerequisites

1. node.js version 6.0 or greater

# Steps to Verify

1. `git clone git@github.com:consoleau/console-frontend-interview-template.git`
1. `cd console-frontend-interview-template`
1. `npm install`
1. `npm test`
    1. If you see this output (or similar), then your environment is ready! :

```
    Foo Test
       ✓ fn1 returns 'BAR'
    1 passing (Xms)
```   

If you don't see the 1 passing message above then there is an issue with the install, likely the node version, that needs to be sorted before the tech interview. 

# Email Template

This is for us to send to you. You've probably already read this ;)

Part of the interview will involve one or more coding challenges.
 
 * The coding challenge are completed in Javascript 
     * the suite supports ES6 but ES6 knowledge is not required
 * The interviewer will help as necessary by providing hints and guidelines.
 * The session will run for 40-60 minutes  
 

You have the option of bringing your own hardware or using a provided laptop.
If you prefer your own environment that you are familiar with, then please ensure that your environment has some dependencies pre-installed.
The list of dependencies and a mechanism to verify the dependencies can be found here : 

https://github.com/consoleau/console-frontend-interview-template

Please clone this repo, follow the instructions, and verify that you get a test pass in your environment.
