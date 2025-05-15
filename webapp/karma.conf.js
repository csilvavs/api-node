module.exports = function(config) {
  config.set({
    frameworks: ["ui5"],
    browsers: ["ChromeHeadless"],
    singleRun: true,

    ui5: {
      type: "application",
      configPath: "ui5.yaml",
      testpage: "./test/unit/unitTests.qunit.html"
    },

    reporters: ["progress"],
    plugins: [
      "karma-ui5",
      "karma-qunit",
      "karma-chrome-launcher"
    ]
  });
};
