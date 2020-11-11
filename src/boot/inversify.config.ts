import { Container } from "inversify";
import CoreService from "../services/core.service";
import { ICoreInterface } from '../services/interfaces/core.interface';

const container = new Container();

container.bind<ICoreInterface>(CoreService).to(CoreService).inSingletonScope();

export { container };