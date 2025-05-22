module.exports = {
  "initialCwd": "C:\\Users\\csilva\\Music\\api-node",
  "browserArgs": [],
  "cwd": "C:\\Users\\csilva\\Music\\api-node",
  "config": "ui5-test-runner.json",
  "port": 8085,
  "reportDir": "C:\\Users\\csilva\\Music\\api-node\\report",
  "pageTimeout": 0,
  "failFast": false,
  "failOpaFast": false,
  "keepAlive": false,
  "logServer": false,
  "parallel": 2,
  "browser": "C:\\Users\\csilva\\Music\\api-node\\node_modules\\ui5-test-runner\\src\\defaults\\puppeteer.js",
  "npmInstall": true,
  "browserCloseTimeout": 2000,
  "browserRetry": 1,
  "outputInterval": 30000,
  "offline": false,
  "localhost": "localhost",
  "webapp": "C:\\Users\\csilva\\Music\\api-node\\webapp",
  "pageCloseTimeout": 250,
  "globalTimeout": 0,
  "screenshot": true,
  "screenshotOnFailure": true,
  "screenshotTimeout": 5000,
  "splitOpa": false,
  "reportGenerator": [
    "C:\\Users\\csilva\\Music\\api-node\\node_modules\\ui5-test-runner\\src\\defaults\\report.js"
  ],
  "progressPage": "C:\\Users\\csilva\\Music\\api-node\\node_modules\\ui5-test-runner\\src\\defaults\\report\\default.html",
  "coverageSettings": "C:\\Users\\csilva\\Music\\api-node\\node_modules\\ui5-test-runner\\src\\defaults\\.nycrc.json",
  "coverageTempDir": "C:\\Users\\csilva\\Music\\api-node\\.nyc_output",
  "coverageReportDir": "C:\\Users\\csilva\\Music\\api-node\\coverage",
  "coverageReporters": [
    "lcov",
    "cobertura"
  ],
  "coverageCheckBranches": 0,
  "coverageCheckFunctions": 0,
  "coverageCheckLines": 0,
  "coverageCheckStatements": 0,
  "coverageRemoteScanner": "C:\\Users\\csilva\\Music\\api-node\\node_modules\\ui5-test-runner\\src\\defaults\\scan-ui5.js",
  "serveOnly": false,
  "watch": false,
  "startWaitMethod": "GET",
  "startTimeout": 5000,
  "endTimeout": 5000,
  "ui5": "https://ui5.sap.com",
  "disableUi5": false,
  "testsuite": "test/testsuite.qunit.html",
  "coverageProxy": false,
  "coverageProxyInclude": ".*",
  "coverageProxyExclude": "/((test-)?resources|tests?)/",
  "url": [
    "http://localhost:8080/test/testsuite.qunit.html"
  ],
  "mode": "url",
  "coverage": false,
  "libs": [],
  "env": {},
  "browserCapabilities": {
    "modules": [
      "puppeteer"
    ],
    "screenshot": ".png",
    "scripts": true,
    "parallel": true,
    "traces": [
      "console",
      "network"
    ]
  },
  "browserModules": {
    "puppeteer": "C:\\Users\\csilva\\Music\\api-node\\node_modules\\puppeteer"
  },
  "start": "2025-05-22T14:29:11.962Z",
  "failed": true,
  "testPageUrls": [
    "http://localhost:8080/test/unit/unitTests.qunit.html",
    "http://localhost:8080/test/integration/opaTests.qunit.html"
  ],
  "qunitPages": {
    "http://localhost:8080/test/unit/unitTests.qunit.html": {
      "id": "le6KDh_XnDk",
      "start": "2025-05-22T14:29:33.633Z",
      "isOpa": false,
      "failed": 1,
      "passed": 0,
      "count": 1,
      "modules": [
        {
          "name": "View1 Controller",
          "tests": [
            {
              "name": "Suma de dos números positivos",
              "testId": "d46fa869",
              "skip": false,
              "start": "2025-05-22T14:29:33.729Z",
              "logs": [
                {
                  "result": false,
                  "message": "5 + 3 debe ser 8",
                  "actual": 7,
                  "expected": 8,
                  "negative": false,
                  "runtime": 1,
                  "todo": false,
                  "source": "    at Object.<anonymous> (http://localhost:8080/test/unit/controller/View1Page.controller.js:10:10)\n    at Object.i (http://localhost:8080/resources/sap/ui/thirdparty/sinon.js:220:476)\n    at Object.e (http://localhost:8080/resources/sap/ui/thirdparty/sinon.js:220:794)\n    at n (http://localhost:8080/resources/sap/ui/thirdparty/qunit-2.js:11:13504)\n    at G.e [as run] (http://localhost:8080/resources/sap/ui/thirdparty/qunit-2.js:11:13327)\n    at http://localhost:8080/resources/sap/ui/thirdparty/qunit-2.js:11:16109"
                }
              ],
              "screenshot": "d46fa869.png",
              "end": "2025-05-22T14:29:34.104Z",
              "report": {
                "skipped": false,
                "todo": false,
                "failed": 1,
                "passed": 0,
                "total": 1,
                "runtime": 4,
                "source": "    at QUnit.test (http://localhost:8080/resources/sap/ui/thirdparty/sinon-qunit.js:34:356)\n    at http://localhost:8080/test/unit/controller/View1Page.controller.js:4:7"
              }
            }
          ]
        }
      ],
      "end": "2025-05-22T14:29:34.838Z",
      "report": {
        "passed": 0,
        "failed": 1,
        "total": 1,
        "runtime": 11
      }
    },
    "http://localhost:8080/test/integration/opaTests.qunit.html": {
      "id": "0$DpdM9YXHo",
      "start": "2025-05-22T14:29:34.673Z",
      "isOpa": true,
      "failed": 1,
      "passed": 0,
      "count": 1,
      "modules": [
        {
          "name": "Navigation Journey",
          "tests": [
            {
              "name": "Should see the initial page of the app",
              "testId": "804ee59d",
              "skip": false,
              "start": "2025-05-22T14:29:34.777Z",
              "logs": [
                {
                  "result": false,
                  "message": "Did not find the App view\nOpa timeout after 15 seconds\nThis is what Opa logged:\nThere are 1 open XHRs and 0 open FakeXHRs.\nXHR: URL: '/b1s/v2/$metadata?sap-language=EN' Method: 'GET' Async: 'true'\nStack:     at Object.e [as resolveStackTrace] (http://localhost:8080/resources/sap/ui/test/autowaiter/_utils.js:6:117)\n    at XMLHttpRequest.d (http://localhost:8080/resources/sap/ui/test/autowaiter/_XHRWaiter.js:6:1318)\n    at XMLHttpRequest.send (http://localhost:8080/resources/sap/ui/test/autowaiter/_XHRWaiter.js:6:971)\n    at Object.send (http://localhost:8080/resources/sap-ui-core.js:1238:87185)\n    at jQuery.ajax (http://localhost:8080/resources/sap-ui-core.js:1238:83420)\n    at jQuery.ajax (http://localhost:8080/resources/sap-ui-core.js:1192:4408)\n    at i (http://localhost:8080/resources/sap/ui/core/library-preload.js:2364:651)\n    at http://localhost:8080/resources/sap/ui/core/library-preload.js:2364:1123\n    at o (http://localhost:8080/resources/sap/ui/test/autowaiter/_promiseWaiter.js:6:2277)\n    at new Promise (<anonymous>) -  sap.ui.test.autowaiter._XHRWaiter#hasPending\nCallstack:\n    at AppPage.iShouldSeeTheApp (http://localhost:8080/test/integration/pages/AppPage.js:10:19)\n    at Object.<anonymous> (http://localhost:8080/test/integration/NavigationJourney.js:26:18)\n    at Object.<anonymous> (http://localhost:8080/resources/sap/ui/test/opaQunit.js:6:1967)\n    at n (http://localhost:8080/resources/sap/ui/thirdparty/qunit-2.js:11:13504)\n    at G.e [as run] (http://localhost:8080/resources/sap/ui/thirdparty/qunit-2.js:11:13327)\n    at http://localhost:8080/resources/sap/ui/thirdparty/qunit-2.js:11:16109\n    at Object.F [as advance] (http://localhost:8080/resources/sap/ui/thirdparty/qunit-2.js:11:9930)",
                  "actual": false,
                  "expected": true,
                  "negative": false,
                  "runtime": 19273,
                  "todo": false,
                  "source": "    at e (http://localhost:8080/resources/sap/ui/thirdparty/qunit-2.js:11:21830)\n    at http://localhost:8080/resources/sap/ui/test/opaQunit.js:6:1015\n    at Object.<anonymous> (http://localhost:8080/resources/sap/ui/test/opaQunit.js:6:2117)\n    at u (http://localhost:8080/resources/sap-ui-core.js:1238:25639)\n    at Object.fireWith [as rejectWith] (http://localhost:8080/resources/sap-ui-core.js:1238:26474)\n    at t.reject (http://localhost:8080/resources/sap-ui-core.js:1192:10108)",
                  "screenshot": "804ee59d-19273.png"
                }
              ],
              "screenshot": "804ee59d.png",
              "end": "2025-05-22T14:29:54.499Z",
              "report": {
                "skipped": false,
                "todo": false,
                "failed": 1,
                "passed": 0,
                "total": 1,
                "runtime": 19338,
                "source": "    at r (http://localhost:8080/resources/sap/ui/test/opaQunit.js:6:1790)\n    at o (http://localhost:8080/resources/sap/ui/test/opaQunit.js:6:902)\n    at http://localhost:8080/test/integration/NavigationJourney.js:16:3\n    at c (http://localhost:8080/resources/sap-ui-core.js:10:16943)"
              }
            }
          ]
        }
      ],
      "end": "2025-05-22T14:29:55.145Z",
      "report": {
        "passed": 0,
        "failed": 1,
        "total": 1,
        "runtime": 19346
      }
    }
  },
  "end": "2025-05-22T14:29:55.654Z",
  "testPageHashes": [
    "le6KDh_XnDk",
    "0$DpdM9YXHo"
  ]
}