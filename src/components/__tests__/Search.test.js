import '@testing-library/jest-dom';
import { render, waitFor, fireEvent } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router";
import { RESTAURANT_DATA } from "../../mocks/Data";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            Promise.resolve(RESTAURANT_DATA);
        },
    });
});

test("Shimmer results on Homepage", async() =>{
   const body = render(
   <StaticRouter>
<Provider store={store}>
        <Body/>
    </Provider>
    </StaticRouter>
    );

    await waitFor(()=> expect(body.getByTestId("search-btn")))
    const resList = body.getByTestId("res-list");
    expect(resList.children.length).toBe(7);
});

test("Search results on Homepage", async() =>{
    const body = render(
    <StaticRouter>
 <Provider store={store}>
         <Body/>
     </Provider>
     </StaticRouter>
     );
 
     await waitFor(()=> expect(body.getByTestId("search-btn")))
     const input = body.getByTestId("search-input");
     fireEvent.change(input,{
        target: {
            value: "Burger",
        },
     });

     const searchBtn = body.getByTestId("search-btn");

     fireEvent.click(searchBtn);

     expect(resList.children.length).toBe(2);
 });