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
  "start": "2025-05-22T14:50:26.647Z",
  "failed": false,
  "testPageUrls": [
    "http://localhost:8080/test/unit/unitTests.qunit.html"
  ],
  "qunitPages": {
    "http://localhost:8080/test/unit/unitTests.qunit.html": {
      "id": "le6KDh_XnDk",
      "start": "2025-05-22T14:50:41.013Z",
      "isOpa": false,
      "failed": 0,
      "passed": 1,
      "count": 1,
      "modules": [
        {
          "name": "View1 Controller",
          "tests": [
            {
              "name": "Suma de dos números positivos",
              "testId": "d46fa869",
              "skip": false,
              "start": "2025-05-22T14:50:41.119Z",
              "logs": [
                {
                  "result": true,
                  "message": "5 + 3 debe ser 8",
                  "actual": 8,
                  "expected": 8,
                  "negative": false,
                  "runtime": 1,
                  "todo": false
                }
              ],
              "end": "2025-05-22T14:50:41.218Z",
              "report": {
                "skipped": false,
                "todo": false,
                "failed": 0,
                "passed": 1,
                "total": 1,
                "runtime": 2,
                "source": "    at QUnit.test (http://localhost:8080/resources/sap/ui/thirdparty/sinon-qunit.js:34:356)\n    at http://localhost:8080/test/unit/controller/View1Page.controller.js:4:7"
              }
            }
          ]
        }
      ],
      "end": "2025-05-22T14:50:41.780Z",
      "report": {
        "passed": 1,
        "failed": 0,
        "total": 1,
        "runtime": 8
      }
    }
  },
  "end": "2025-05-22T14:50:42.130Z",
  "testPageHashes": [
    "le6KDh_XnDk"
  ]
}