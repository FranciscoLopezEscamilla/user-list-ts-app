import Header from "../components/Header";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "../test-utils";

test("should first", async () => {
  const handleClick = jest.fn();
  render(<Header userCount={2} onOpen={handleClick} />);

  const headerElement = screen.getByText("User Manager (2)");
  expect(headerElement).toBeInTheDocument();

  const buttonElement = screen.getByRole("button");
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement); // Simulate a button click

  expect(handleClick).toHaveBeenCalled();
});
