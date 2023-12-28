import 'normalize.css';
import './styles/styles.css';
import { App } from './components/app/app';

const app = new App;
app.createView();
app.addListeners();

