
import { expect, waitFor, test, describe, expectTypeOf } from "vitest"
import InteractService from "../services/interact"
import { SuspendableResource } from "../services/suspendable";
import { Message } from "../models/message";

describe("interact service works correctly", () => {

    test("interact respects singleton", () => {
        const interact1 = new InteractService()
        const interact2 = new InteractService()
        expect(interact1).toBe(interact2)
    });

    test("sendQuery returns a SuspendableResource with a Message inside", async () => {
        const interact = new InteractService()
        const response = interact.sendQuery("This is a query")
        expectTypeOf(response).toHaveProperty("read")
        //expect(response.read()).toThrow()
        await waitFor(new Promise((resolve) => {
            resolve("test")
        }))
        const result = response.read()
        expect(response.read()).not.toThrow()
        expect(result).toHaveProperty([ "text", "id" ])
    })

})




