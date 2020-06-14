// Test Plan: https://docs.google.com/document/d/1prNz1oaszTSya1VEpZAz2tTBQiA1QkKja5AwqFbrx1E/edit?usp=sharing
// Project Board: https://trello.com/b/ttGYx6wk/automation-basics-project-board

var basic = {}
module.exports = {
    beforeEach: browser => {
        basic = browser.page.basicsObjects()
        basic
            .navigate()
    },
    after: browser => {
        basic
            .end()
    },
    'Evens and Odds Test 1': browser => {
        var eOData = {
            search: '1,2,3,4,5',
            resultsEven: 'Evens: [2,4]',
            resultsOdds: 'Odds: [1,3,5]',
        }
        basic
        .setValue('@eOField', eOData.search)
        .click('@eOButton')
        .assert.containsText('@evenResults' , eOData.resultsEven)
        .assert.containsText('@oddResults' , eOData.resultsOdds)

    },
    'Evens And odds Test 2': browser => {
        var eOData = {
            search: 'e',
            results: 'Odds: [null]'
        }
        basic
        .setValue('@eOField' , eOData.search)
        .click('@eOButton')
        .assert.containsText('@oddResults' , eOData.results)
    },
    'Filter Objects Test': browser =>{
        var fOData = {
            search: 'name',
            results: 'Jimmy Joe'
        }
        basic
        .setValue('@fOField' , fOData.search)
        .click('@fOButton')
        .assert.containsText('@fOResults' , fOData.results)
    }, 
    'Filter Strings Test': browser =>{
        var fSData = {
            search: 'James',
            results: 'Filtered Names: [ "James" ]'
        }
        basic
        .setValue('@fSField' , fSData.search)
        .click('@fSButton')
        .assert.containsText('@fSResults' , fSData.results)
    },
    'Palindrome True Test': browser =>{
        var pData = {
            search: '121',
            result: 'Palindrome: true',
        }
        basic
        .setValue('@pField' , pData.search)
        .click('@pButton')
        .assert.containsText('@pResults' , pData.result)
    },
    'Palindrome False Test': browser =>{
        var pData = {
            search: '123',
            result: 'Palindrome: false'
        }
        basic
        .setValue('@pField' , pData.search)
        .click('@pButton')
        .assert.containsText('@pResults' , pData.result)
    },
    'Sum Test': browser =>{
        var sData = {
            search1: '4',
            search2: '5',
            result: 'Sum: 9'
        }
        basic
        .setValue('@sField1' , sData.search1)
        .setValue('@sField2' , sData.search2)
        .click('@sButton')
        .assert.containsText('@sResults' , sData.result)
    }
}