$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/Search.feature");
formatter.feature({
  "line": 2,
  "name": "user enters text in search box and hints are displayed",
  "description": "",
  "id": "user-enters-text-in-search-box-and-hints-are-displayed",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": ": user enters text in search box",
  "description": "",
  "id": "user-enters-text-in-search-box-and-hints-are-displayed;:-user-enters-text-in-search-box",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "search box exists",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter text in search box \u003csearch_text\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "search results are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select search suggestion link \u003cselect_link\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I can see search results on page \u003csearch_result\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "user-enters-text-in-search-box-and-hints-are-displayed;:-user-enters-text-in-search-box;",
  "rows": [
    {
      "cells": [
        "search_text",
        "select_link",
        "search_result"
      ],
      "line": 13,
      "id": "user-enters-text-in-search-box-and-hints-are-displayed;:-user-enters-text-in-search-box;;1"
    },
    {
      "cells": [
        "SMD291AX250T3",
        "1",
        "SMD291AX250T3"
      ],
      "line": 14,
      "id": "user-enters-text-in-search-box-and-hints-are-displayed;:-user-enters-text-in-search-box;;2"
    },
    {
      "cells": [
        "soldering",
        "3",
        "Soldering Iron Tips"
      ],
      "line": 15,
      "id": "user-enters-text-in-search-box-and-hints-are-displayed;:-user-enters-text-in-search-box;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": ": user enters text in search box",
  "description": "",
  "id": "user-enters-text-in-search-box-and-hints-are-displayed;:-user-enters-text-in-search-box;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "search box exists",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter text in search box SMD291AX250T3",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "search results are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select search suggestion link 1",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I can see search results on page SMD291AX250T3",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.searchBoxIsPresent()"
});
formatter.result({
  "duration": 9750074697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SMD291AX250T3",
      "offset": 27
    }
  ],
  "location": "SearchSteps.enterText(String)"
});
formatter.result({
  "duration": 217221300,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.displayResults()"
});
formatter.result({
  "duration": 580678895,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "SearchSteps.selectSuggestionLink(int)"
});
formatter.result({
  "duration": 2709463071,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SMD291AX250T3",
      "offset": 33
    }
  ],
  "location": "SearchSteps.displaySearchResults(String)"
});
formatter.result({
  "duration": 94141470,
  "status": "passed"
});
formatter.after({
  "duration": 1221826288,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": ": user enters text in search box",
  "description": "",
  "id": "user-enters-text-in-search-box-and-hints-are-displayed;:-user-enters-text-in-search-box;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "search box exists",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter text in search box soldering",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "search results are displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I select search suggestion link 3",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I can see search results on page Soldering Iron Tips",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.searchBoxIsPresent()"
});
formatter.result({
  "duration": 7721151163,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "soldering",
      "offset": 27
    }
  ],
  "location": "SearchSteps.enterText(String)"
});
formatter.result({
  "duration": 178460184,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.displayResults()"
});
formatter.result({
  "duration": 562328130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 32
    }
  ],
  "location": "SearchSteps.selectSuggestionLink(int)"
});
formatter.result({
  "duration": 4951039410,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Soldering Iron Tips",
      "offset": 33
    }
  ],
  "location": "SearchSteps.displaySearchResults(String)"
});
formatter.result({
  "duration": 350370977,
  "status": "passed"
});
formatter.after({
  "duration": 1562001212,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "search for a part number and checkout",
  "description": "",
  "id": "user-enters-text-in-search-box-and-hints-are-displayed;search-for-a-part-number-and-checkout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "page contains search results for 01508",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I add product to basket",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click checkout basket and confirm",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I get login popup",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "01508",
      "offset": 33
    }
  ],
  "location": "SearchSteps.page_contains_search_results(String)"
});
formatter.result({
  "duration": 12168664417,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.addProductToBasket()"
});
formatter.result({
  "duration": 1329000398,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.clickCheckOut()"
});
formatter.result({
  "duration": 2214924128,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.assertLoginPopup()"
});
formatter.result({
  "duration": 52661230,
  "status": "passed"
});
formatter.after({
  "duration": 1355299081,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": ": user sets filter",
  "description": "",
  "id": "user-enters-text-in-search-box-and-hints-are-displayed;:-user-sets-filter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "page contains search results for Soldering Irons",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I set filter Brand with value Portasol",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I can see product Portasol Gas Soldering Iron, 60W with part_number 10181060",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "product count is 3",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I set filter Wattage with value 125W",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "I can see product Portasol Gas Soldering Iron, 125W with part_number 11180070",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "product count is 1",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "#user checks out"
    }
  ],
  "line": 36,
  "name": "I add product Portasol Gas Soldering Iron, 125W with quantity 1 to basket",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I click checkout basket and confirm",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I get login popup",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Soldering Irons",
      "offset": 33
    }
  ],
  "location": "SearchSteps.page_contains_search_results(String)"
});
formatter.result({
  "duration": 12363717610,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brand",
      "offset": 13
    },
    {
      "val": "Portasol",
      "offset": 30
    }
  ],
  "location": "SearchSteps.setFilterBrand(String,String)"
});
formatter.result({
  "duration": 949277473,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Portasol Gas Soldering Iron, 60W",
      "offset": 18
    },
    {
      "val": "10181060",
      "offset": 68
    }
  ],
  "location": "SearchSteps.assertProductAndPartNumber(String,String)"
});
formatter.result({
  "duration": 1417903571,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "SearchSteps.assertProductCount(int)"
});
formatter.result({
  "duration": 113089052,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wattage",
      "offset": 13
    },
    {
      "val": "125W",
      "offset": 32
    }
  ],
  "location": "SearchSteps.setFilterBrand(String,String)"
});
formatter.result({
  "duration": 848615501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Portasol Gas Soldering Iron, 125W",
      "offset": 18
    },
    {
      "val": "11180070",
      "offset": 69
    }
  ],
  "location": "SearchSteps.assertProductAndPartNumber(String,String)"
});
formatter.result({
  "duration": 481940421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    }
  ],
  "location": "SearchSteps.assertProductCount(int)"
});
formatter.result({
  "duration": 57974034,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Portasol Gas Soldering Iron, 125W",
      "offset": 14
    },
    {
      "val": "1",
      "offset": 62
    }
  ],
  "location": "SearchSteps.addProductToBasket(String,int)"
});
formatter.result({
  "duration": 155662949,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.clickCheckOut()"
});
formatter.result({
  "duration": 2120935093,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.assertLoginPopup()"
});
formatter.result({
  "duration": 117357997,
  "status": "passed"
});
formatter.after({
  "duration": 1454035655,
  "status": "passed"
});
});