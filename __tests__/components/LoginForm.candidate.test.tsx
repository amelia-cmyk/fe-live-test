import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../../app/(features)/todo-list/components/LoginForm";

describe("LoginForm", () => {
  it("shows error when fields are empty", async () => {
    render(<LoginForm />);
    await userEvent.click(screen.getByRole("button", { name: /log in/i }));
    expect(await screen.findByRole("alert")).toHaveTextContent(
      "Username and password are required"
    );
  });

  it("shows error for invalid credentials", async () => {
    render(<LoginForm />);
    await userEvent.type(screen.getByLabelText(/username/i), "wrong");
    await userEvent.type(screen.getByLabelText(/password/i), "wrong");
    await userEvent.click(screen.getByRole("button", { name: /log in/i }));
    expect(await screen.findByRole("alert")).toHaveTextContent("Invalid credentials");
  });

  it("shows success message for correct credentials", async () => {
    render(<LoginForm />);
    await userEvent.type(screen.getByLabelText(/username/i), "admin");
    await userEvent.type(screen.getByLabelText(/password/i), "secret");
    await userEvent.click(screen.getByRole("button", { name: /log in/i }));
    expect(await screen.findByRole("alert")).toHaveTextContent("Welcome, admin!");
  });
});
