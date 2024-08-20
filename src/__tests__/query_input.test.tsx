import { beforeEach, expect, test, describe, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import QueryInput from "../pages/home/query_input";

const sendQueryMock = vi.fn()
let input:HTMLInputElement;

describe("query input works correctly", () => {
    beforeEach(() => {
        render(<QueryInput sendQuery={sendQueryMock} />)
        input = screen.getByTestId("query-input")
    });

    test("input is shown correctly", () => {
        expect(input).toBeInTheDocument()
    })

    test("text can be entered to the input", () => {
        const query = "This is a query with randoms numbers and special characters (123~!/\\\)"
        fireEvent.change(input, {target: {value: query}})
        expect(input.value).toBe(query)
    })

    test("enter key triggers sendQuery method", () => {
        const query = "This is a query with randoms numbers and special characters (123~!/\\\)"
        fireEvent.change(input, {target: {value: query}})
        fireEvent.keyDown(input, {key: "Enter", code: "Enter"})

        expect(sendQueryMock).toHaveBeenCalledWith(query)
    })

    test("click on send button triggers sendQuery method", () => {
        const query = "This is a query with randoms numbers and special characters (123~!/\\\)"
        fireEvent.change(input, {target: {value: query}})

        const click = screen.getByTestId("send-button")
        fireEvent.click(click)

        expect(sendQueryMock).toHaveBeenCalledWith(query)
    });

    test("sendQuery method cleans the input after being called", () => {
        const query = "This is a query with randoms numbers and special characters (123~!/\\\)"
        fireEvent.change(input, {target: {value: query}})

        const sendButton = screen.getByTestId("send-button")
        fireEvent.click(sendButton)

        expect(input.value).toBe("")

        fireEvent.change(input, {target: {value: query}})
        fireEvent.keyDown(input, {key: "Enter", code: "Enter"})

        expect(input.value).toBe("")
    });

})
