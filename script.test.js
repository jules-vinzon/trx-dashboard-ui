import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import SignInForm from "./pages/signin/containers/signinForm"; 
import texts from "./components/utilities/texts.json";
import { useRouter } from "next/router";
import "@testing-library/jest-dom";


jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock Redux Store
const mockStore = configureStore([]);

describe("SignInForm Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      Auth: {
        loginSuccess: false,
        isLoggingIn: false,
        loginErrorMessage: "",
      },
    });

    useRouter.mockReturnValue({
      push: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders Sign-in form with username and password fields", () => {
    render(
      <Provider store={store}>
        <SignInForm />
      </Provider>
    );

    expect(screen.getByText(/Log In/i, { selector: "div.signin-header" })).toBeInTheDocument();

    expect(screen.getByPlaceholderText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();

    expect(screen.getByRole("button", { name: /Log In/i })).toBeInTheDocument();
  });
});