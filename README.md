# [Relay](http://facebook.github.io/relay/) documentation for [Dash](http://kapeli.com/dash)

[![Known Vulnerabilities](https://snyk.io/test/github/epitaphmike/relay-dash/badge.svg)](https://snyk.io/test/github/epitaphmike/relay-dash)

## Installation in Dash

**To install the Relay documentation in Dash, go to:**

Preferences >> Downloads >> User Contributed

This repo is used to generate those docs. You don't need to touch it unless you want to contribute to it.

To update the docset, please read the instructions [here](https://github.com/Kapeli/Dash-User-Contributions#contribute-a-new-docset) (more specifically, "Set up your directory structure"). To generate the docset for your Dash-User-Contributions pull request, you'd use this repo.

**Note**: If you do wish to update the docset, please notify me by [opening an issue](https://github.com/epitaphmike/relay-dash/issues/new). I'd like to double check everything before you send it off to the Dash repo.

## Docset Manual Build Instructions

Prerequisites: wget, node and sqlite3. For OS X:

    brew install wget node sqlite3

Clone this repo, `cd` into it and do:

    npm install
    chmod 777 build.sh
    ./build.sh

The script will:

- Fetch the newest released Relay documentation from http://facebook.github.io/relay/.
- Parse the doc site into a new SQLite database for Dash.
- Create a json file based on the documentation sections and sub-sections.
- Bundle up the result in a Relay.docset.
- GZip for Dash contribution

Test the output by loading the Relay.docset (importing it into Dash).
