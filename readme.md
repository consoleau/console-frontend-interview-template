# Overview

This repo consists of a trivial class and mocha test. The purpose of this module is to verify that a given laptop environment is setup to run our code challenge questions before a technical interview.

# Prerequisites

1. node.js version 6.0 or greater

# Steps to Verify

1. `git clone git@github.com:consoleau/console-frontend-interview-template.git`
1. `cd console-frontend-interview-template`
1. `npm install`
1. `npm test`


    At this point you should see this output and know that your laptop can run our code challenge env:
        
      Foo Test
        ✓ fn1 returns 'BAR'
      1 passing (Xms)
      

If you don't see the 1 passing message above then there is an issue with the install, likely the node version, that needs to be sorted before the tech interview. 

# Email Template

This is for us to send to you. You've probably already read this ;)

Part of the interview will involve one or more coding challenges.
 
 * The coding challenge are completed in Javascript 
     * the suite supports ES6 but ES6 knowledge is not required
 * The interviewer will help as necessary by providing hints and guidelines.
 * The session will run for 40-60 minutes  
 
The objetive of the coding challenge is not just to get the answer but more about seeing how you think.

As stated you have the option of bringing your own hardware or using a laptop that is provided.
If you prefer your own environment which you are familiar with, please ensure that your environment has some dependencies pre-installed.
The list of dependencies and a mechanism to verify the dependencies can be found here : 

https://github.com/consoleau/console-frontend-interview-template

Please clone this repo, follow the instructions, and verify that you get a test pass in your environment.
