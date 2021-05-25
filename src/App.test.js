import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const renderWithRouter = (component) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history}>{component}</Router>),
  };
};

afterEach(cleanup);
test("take a snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App />)).toMatchSnapshot();
});

test("should render home page", () => {
  const { container, getByTestId } = renderWithRouter(<App />);
  const navbar = getByTestId("navbar");
  const link = getByTestId("home-link");

  fireEvent.click(link);
  expect(container.innerHTML).toMatch("Manoj");
  expect(navbar).toContainElement(link);
});
test("should render skills page", () => {
  const { container, getByTestId } = renderWithRouter(<App />);
  const navbar = getByTestId("navbar");
  const slink = getByTestId("skills-link");

  fireEvent.click(slink);
  expect(container.innerHTML).toMatch("Skills");
  expect(navbar).toContainElement(slink);
});
test("should render projects page", () => {
  const { container, getByTestId } = renderWithRouter(<App />);
  const navbar = getByTestId("navbar");
  const plink = getByTestId("projects-link");

  fireEvent.click(plink);
  expect(container.innerHTML).toMatch("projects");
  expect(navbar).toContainElement(plink);
});
test("should render contact page", () => {
  const { container, getByTestId } = renderWithRouter(<App />);
  const navbar = getByTestId("navbar");
  const clink = getByTestId("contact-link");

  fireEvent.click(clink);
  expect(navbar).toContainElement(clink);
  expect(container.innerHTML).toMatch("Contact");
});
