
import { fireEvent, render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { createReduxStore } from "../../store/store";


describe('Counter test', () => {
    test('Test router', async () => {
        const {getByTestId} = render(
        <Provider store={createReduxStore({
            counter: {value: 10}
        })}>
            <Counter />
        </Provider>
        )

        const incrementBtn = getByTestId('increment-btn')
        expect(getByTestId('value-title')).toHaveTextContent('10')
        fireEvent.click(incrementBtn)
        expect(getByTestId('value-title')).toHaveTextContent('11')
    
    })
})