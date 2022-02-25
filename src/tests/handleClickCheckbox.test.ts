import { useState } from "react";
import handleClickCheckbox from "../utils/handleClickCheckbox";
import { InputOptionsInterface } from "../utils/InputOptionsInterface";

/**
 * TO-DO:
 * - Doesn't add tag when current tags are at maximum
 * - Adds a tag if there are no current tags
 * 
 */

/**
 * Completed:
 * - Adds a tag if it doesn't already exist in current tags and tagLimit has not been met
 * - Removes a tag if it already exists in current tags
 */

test("Adds tag 'vinyasa' when it is not in current tags and tag limit has not been met", () => {
    const output = handleClickCheckbox("vinyasa", inputOptions1, tagLimits, times);
  expect(output.tags).toStrictEqual(["stretch", "morning", "vinyasa"])
});

const inputOptions1= {
  duration: 60,
  tags: ["stretch", "morning"],
};
const times = [20, 30, 45, 60];
const tagLimits = [1, 2, 2, 3];

test("Removes a tag if it already exists in current tags", () => {
    const output = handleClickCheckbox("stretch", inputOptions1, tagLimits, times);
    expect(output.tags).toStrictEqual(["morning"]);
})
