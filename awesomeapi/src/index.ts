import { Container } from "typescript-ioc";
import AwesomeApi from './AwesomeApi';

const app: AwesomeApi = Container.get(AwesomeApi);
app.start();
