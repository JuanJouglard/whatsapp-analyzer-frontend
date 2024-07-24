
import { expect, test } from "vitest"
import InteractService from "../services/interact"

test("interact respects singleton", () => {
    const interact1 = new InteractService()
    const interact2 = new InteractService()
    expect(interact1).toBe(interact2)
});




