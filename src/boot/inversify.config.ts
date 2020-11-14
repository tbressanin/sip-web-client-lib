import { ISipService } from "@interfaces";
import { SipService } from "@services";
import { Container } from "inversify";

const container = new Container();

container.bind<ISipService>(SipService).to(SipService).inSingletonScope();

export { container };