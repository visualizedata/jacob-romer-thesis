import requests, re, json, os, math, sys

# Process the bugs (taken from the Ghostery Chrome extension) from their
# JSon text format to a set of name/regex patterns.
def readbugs(fileName):
	bugsTxt = open(fileName).read()
	# Read the list of bugs from the json.
	bugs = json.loads(bugsTxt).get('bugs')
        print [bugs]*20
	return bugs

if __name__ == '__main__':
   readbugs("bugs.json")

