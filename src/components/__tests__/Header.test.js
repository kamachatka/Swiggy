import { render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router";

test("logo should load on rendering header", () => {
   const header = render(
   <StaticRouter>
   <Provider store={store}><Header/>
   </Provider>
   </StaticRouter>
   );
   const logo = header.getAllByTestId("logo");
   expect(logo[0].src).toBe("https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj");
});

test("show online on rendering header", () => {
    const header = render(
    <StaticRouter>
    <Provider store={store}><Header/>
    </Provider>
    </StaticRouter>
    );
    const onlineStatus = header.getByTestId("online-status");
    expect(onlineStatus.innerHTML).toBe("ONLINE");
 });

 test("cart should have 0 item on rendering header", () => {
    const header = render(
    <StaticRouter>
    <Provider store={store}><Header/>
    </Provider>
    </StaticRouter>
    );
    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart- 0 items");
 });