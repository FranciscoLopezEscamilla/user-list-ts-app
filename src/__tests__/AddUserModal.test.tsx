import AddUserModal from "../components/AddUserModal";
import "@testing-library/jest-dom";
import { render, screen } from "../test-utils";

test("should first", async () => {
  render(
    <AddUserModal
      isOpen={true}
      onClose={() => {}}
      handleSubmit={jest.fn()}
      register={jest.fn()}
      onSubmit={() => {}}
    />
  );

  const headerElement = screen.getAllByText("Add User");
  expect(headerElement).toHaveLength(2);
});
