import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../router/AppRouter";
import { render } from "@testing-library/react";

export const renderTestApp = (component, initialRoute = '/') => {

    return render(
        <MemoryRouter initialEntries={[initialRoute]}>
            <Provider store={createReduxStore()}>
                <AppRouter />
                {component}
            </Provider>
        </MemoryRouter>
    )
}
