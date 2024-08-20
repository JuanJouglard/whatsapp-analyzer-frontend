import { expect, test, describe } from "vitest"
import { format } from "../utils/date"


describe("utils", () => {
    test("date format", () => {
        const formatted_date = format(new Date())
        expect(formatted_date).toMatch(/\d\d:\d\d:\d\d.\d\d\dZ \d\d\d\d\-\d\d\-\d\d/)
    })
})
