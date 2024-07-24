import { expect, test, describe, vi, beforeEach, afterEach } from "vitest"
import { render } from "@testing-library/react";
import { withService } from "../services";
import InteractService from "../services/interact";

vi.mock("../service/interact", () => {
    return vi.fn().mockImplementation(() => {
        return {
            sendQuery: vi.fn()
        }
    })
})

const DummyComponent = vi.fn().mockImplementation(() => {
    return <p>Dummy component</p>
})

describe("service injection", () => {
    test("injection works correctly", () => {
        const DummyInjected = withService(DummyComponent, ["interact"])
        render(<DummyInjected />)
        expect(DummyComponent).toHaveBeenCalledWith({interact: new InteractService()}, {})
    });

    test("fail gracefully when service is not available", () => {
        const DummyInjected = withService(DummyComponent, ["random_service_that_doesnt_exist_on_the_codebase"])
        render(<DummyInjected />)
        expect(DummyComponent).toHaveBeenCalledWith({}, {})
    });
})




