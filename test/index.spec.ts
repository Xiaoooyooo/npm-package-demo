import "mocha";
import assert from "assert";

import time from "../";
describe("simple demo test", () => {
  const now = new Date();
  it("should be the year", () => {
    assert.equal(time.year(), now.getFullYear());
  });
  it("should be the month", () => {
    assert.equal(time.month(), now.getMonth());
  });
  it("should be the date", () => {
    assert.equal(time.date(), now.getDate());
  });
  it("should be the day", () => {
    assert.equal(time.day(), now.getDay());
  });
});
