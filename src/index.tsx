import { App, Providers } from 'app';
import 'app/styles/index.scss';
import { render } from 'react-dom';

render(
  <Providers>
    <App />
  </Providers>,
  document.getElementById('root'),
);
