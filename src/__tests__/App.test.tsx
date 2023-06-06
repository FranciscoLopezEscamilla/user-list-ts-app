import { render, fireEvent, screen } from "../test-utils";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import App from "../App";

test("Render without errors", async () => {
  // ARRANGE
  render(<App />);

  // // ACT
  // await userEvent.click(screen.getByText("Load Greeting"));
  // await screen.findByRole("heading");

  // // ASSERT
  // expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  // expect(screen.getByRole("button")).toBeDisabled();
});
