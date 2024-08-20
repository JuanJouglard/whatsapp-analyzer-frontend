import { beforeEach, expect, test, describe, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import MessageBubble from "../pages/home/message"
import Chat from "../pages/home/chat"
import Home from "../pages/home"
import { createMemoryRouter, RouterProvider } from "react-router-dom";

const mockInput = vi.fn()
vi.mock("../pages/home/message", () => ({
    default: (props:any) => {
        mockInput(props)
        return <p>This is a new message</p>
    }
}))

vi.mock("../services/interact", () => {
    const InteractService = vi.fn(() => ({
        sendQuery: vi.fn().mockImplementation(() => {
            return {
                read() {
                    return {
                        "text": "Response from model",
                        "id": Math.random() * 100 + "",
                        "date": new Date()
                    };
                }
            }
        })
    }));
    return { default: InteractService }
})

describe("message component", () => {
    beforeEach(() => {
        const MemoryRouter = createMemoryRouter([
            {
                path: "/chat",
                element: <Chat/>
            }
        ],{
            initialEntries: ["/chat"]
        });
        render(<RouterProvider router={MemoryRouter}/>)
    })

    test("expect input to be visible", () => {
        const input = screen.getByTestId("query-input")
        expect(input).toBeVisible()
    })

    test("empty submit of input doesn't add new message", () => {
        const input = screen.getByTestId("query-input")
        const list = screen.getByLabelText("message-list")
        fireEvent.change(input, {target: {value: ""}})
        fireEvent.keyDown(input, {key: "Enter", code: "Enter"})
        expect(list.childElementCount).toBe(0)
    })

    test("new message with response is added correctly", () => {
        const input = screen.getByTestId("query-input")
        const list = screen.getByLabelText("message-list")
        fireEvent.change(input, {target: {value: "This is a new message"}})
        fireEvent.keyDown(input, {key: "Enter", code: "Enter"})
        expect(list.childElementCount).toBe(2)
    })

    test("message and responses content is correct", () => {
        vi.unmock("../pages/home/message")
        const input = screen.getByTestId("query-input")
        const list = screen.getByLabelText("message-list")
        fireEvent.change(input, {target: {value: "This is a new message"}})
        fireEvent.keyDown(input, {key: "Enter", code: "Enter"})
        expect(list.children[0].children[0].textContent).toBe("This is a new message")
        expect(list.children[1].children[0].textContent).toBe("Response from model")
    })
})


