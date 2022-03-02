import maxCheckMessage from "../utils/maxCheckMessage";

test("Check returns right message for different times", () => {
  expect(maxCheckMessage(20)).toBe("Select 1 option");
  expect(maxCheckMessage(30)).toBe("Select 1-2 options");
  expect(maxCheckMessage(45)).toBe("Select 1-2 options");
  expect(maxCheckMessage(60)).toBe("Select 1-3 options");
});

test("Returns empty string for 25 mins", () => {
  expect(maxCheckMessage(25)).toBe("");
});
