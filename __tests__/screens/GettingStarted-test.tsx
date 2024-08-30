import GettingStarted from "@/app/(initial)";
import { render } from "@testing-library/react-native";

describe("Test getting started screen", () => {
  it("should render correctly", () => {
    const { getByText } = render(<GettingStarted />);

    getByText("GET STARTED");
  });

  it("should render correctly with snapshot", () => {
    const tree = render(<GettingStarted />).toJSON;

    expect(tree).toMatchSnapshot();
  });
});
