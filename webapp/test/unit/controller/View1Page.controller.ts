/*global QUnit*/
import Controller from "vs/project3/controller/View1.controller";
QUnit.module("View1 Controller");

QUnit.test("Suma de dos números positivos", function(assert) {
    // Arrange
    const a: number = 5;
    const b: number = 3;
    
    
    
    // Assert
    assert.strictEqual(7, 8, "5 + 3 debe ser 8");
});