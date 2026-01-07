import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ThemeProvider, useTheme } from "./ThemeContext";

const createMatchMedia = (matches: boolean) =>
  vi.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));

const ThemeConsumer = ({ label }: { label: string }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <span data-testid={label}>{theme}</span>
      <button onClick={toggleTheme}>toggle</button>
    </div>
  );
};

describe("ThemeContext", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("uses the provided default theme and sets data-theme on the root", () => {
    vi.stubGlobal("matchMedia", createMatchMedia(false));

    render(
      <ThemeProvider defaultTheme="light">
        <ThemeConsumer label="theme" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme").textContent).toBe("light");
    expect(document.documentElement).toHaveAttribute("data-theme", "light");
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("prefers the stored theme when available", () => {
    localStorage.setItem("theme", "dark");
    vi.stubGlobal("matchMedia", createMatchMedia(false));

    render(
      <ThemeProvider defaultTheme="light">
        <ThemeConsumer label="theme" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme").textContent).toBe("dark");
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  });

  it("falls back to system preference when no stored value", () => {
    vi.stubGlobal("matchMedia", createMatchMedia(true));

    render(
      <ThemeProvider defaultTheme="light">
        <ThemeConsumer label="theme" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme").textContent).toBe("dark");
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  });

  it("toggles the theme and syncs data-theme and localStorage", async () => {
    const user = userEvent.setup();
    vi.stubGlobal("matchMedia", createMatchMedia(false));

    render(
      <ThemeProvider defaultTheme="light">
        <ThemeConsumer label="theme" />
      </ThemeProvider>,
    );

    expect(screen.getByTestId("theme").textContent).toBe("light");

    await user.click(screen.getByRole("button", { name: "toggle" }));

    expect(screen.getByTestId("theme").textContent).toBe("dark");
    expect(document.documentElement).toHaveAttribute("data-theme", "dark");
    expect(localStorage.getItem("theme")).toBe("dark");
  });
});
