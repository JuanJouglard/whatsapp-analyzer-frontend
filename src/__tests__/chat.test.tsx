import { beforeEach, expect, test, describe, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import MessageBubble from "../pages/home/message"
import Chat from "../pages/home/chat"

const mockInput = vi.fn()
vi.mock("../pages/home/message", () => ({
    default: (props:any) => {
        mockInput(props)
        return <p>This is a new message</p>
    }
}))

vi.mock("../services/interact", () => {
    const InteractService = vi.fn(() => ({
        sendQuery: vi.fn().mockImplementation(() => ({
            "text": "Response from model",
            "id": Math.random() * 100 + "",
            "date": new Date()
        }))
    }));
    return { default: InteractService }
})

describe("message component", () => {
    beforeEach(() => {
        cleanup()
    })
    test("correct props are passed to MessageBubble (might not need this test in the future)", () => {

        const message = {text: "Text from user", id: "1", date: new Date()}

        render(<MessageBubble message={message}/>)

        expect(mockInput).toHaveBeenCalledWith(expect.objectContaining({ message }))

    })

    test("expect input to be visible", () => {
        const dom = render(<Chat />)
        const input = dom.getByLabelText("query-input")
        expect(input).toBeVisible()
    })

    test("empty submit of input doesn't add new message", () => {
        const dom = render(<Chat />)
        const input = dom.getByLabelText("query-input")
        const list = dom.getByLabelText("message-list")
        fireEvent.change(input, {target: {value: ""}})
        fireEvent.keyDown(input, {key: "Enter", code: "Enter"})
        expect(list.childElementCount).toBe(0)
    })

    test("new message with response is added correctly", () => {
        const dom = render(<Chat />)
        const input = dom.getByLabelText("query-input")
        const list = dom.getByLabelText("message-list")
        fireEvent.change(input, {target: {value: "This is a new message"}})
        fireEvent.keyDown(input, {key: "Enter", code: "Enter"})
        expect(list.childElementCount).toBe(2)
    })

    test("message and responses content is correct", () => {
        const dom = render(<Chat />)
        const input = dom.getByLabelText("query-input")
        const list = dom.getByLabelText("message-list")
        fireEvent.change(input, {target: {value: "This is a new message"}})
        fireEvent.keyDown(input, {key: "Enter", code: "Enter"})
        expect(list.children[0].textContent).toBe("This is a new message")
        expect(list.children[1].textContent).toBe("Response from model")
    })

    test("new message shows loading until data is available", () => {
        vi.clearAllMocks()
        const dom = render(<Chat />)
        const input = dom.getByLabelText("query-input")
        fireEvent.change(input, {target: {value: "This is a new message"}})
        fireEvent.keyDown(input, {key: "Enter", code: "Enter"})
        const loading = screen.getByLabelText("loading")
        expect(loading).toBeVisible()
    })
})


