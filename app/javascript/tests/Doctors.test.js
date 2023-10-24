import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import Doctors from './Doctors'; 

const mockStore = configureStore([]);

describe('Doctors', () => {

  let store;

  beforeEach(() => {
    store = mockStore({
      doctors: {
        doctors: []  
      }
    });
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <Doctors />
      </Provider>  
    );
  });

  it('dispatches the fetchDoctors action on mount', () => {
     // mock dispatch
     const dispatch = jest.fn();

     render(
       <Provider store={store}>
         <Doctors dispatch={dispatch}/>
       </Provider>
     );

     expect(dispatch).toHaveBeenCalledWith(fetchDoctors());
  });

  it('shows loading text if doctors not fetched', () => {
    const tree = render(
      <Provider store={store}>
        <BrowserRouter>
          <Doctors />
        </BrowserRouter>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('displays doctors if successfully fetched', () => {
    // update store and assert doctors render 
    
  // Render component
  const { getByText } = render(
    <Provider store={store}>
      <Doctors />
    </Provider>
  );

  // Assert loading text 
  expect(getByText(/AVAILABLE DOCTORS/i)).toBeInTheDocument();
  expect(getByText(/No doctors available/i)).toBeInTheDocument();

  });

});