import { beforeEach, expect, test, describe, vi } from "vitest";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Chart from "../pages/home/chart";

vi.mock("recharts", async (importOriginal) => {
  const OriginalModule = await importOriginal();
  return {
    ...OriginalModule,
    ResponsiveContainer: ({ children }) => (
      <OriginalModule.ResponsiveContainer width={1200} height={1200}>
        {children}
      </OriginalModule.ResponsiveContainer>
    ),
  };
});

const data = [
    {
        count: 15,
        name: "John"
    },
    {
        count: 25,
        name: "Paul"
    },
    {
        count: 35,
        name: "Monica"
    },
    {
        count: 45,
        name: "Alex"
    }
]

describe("charts are working properly", () => {
    beforeEach(() => {
        cleanup()
        global.ResizeObserver = class {
            observe() {}
            unobserve() {}
            disconnect() {}
        };
    });

    test("bar chart is render correctly", () => {
        render(<Chart type="bar" data={data} xAxisKey="name" yAxisKey="count" />)
        for (const item of data) {
            expect(screen.getByText(item.name)).toBeInTheDocument()
        }
        expect(document.querySelectorAll(".recharts-bar-rectangle").length).toBe(data.length)

    })

    test.skip("line chart is render correctly", () => {
        render(<Chart type="line" data={data} xAxisKey="name" yAxisKey="count" />)
        for (const item of data) {
            expect(screen.getByText(item.name)).toBeInTheDocument()
        }
        expect(document.querySelectorAll(".recharts-line-dot").length).toBe(data.length)
    })
})
