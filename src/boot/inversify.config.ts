import { ICallService } from "../interfaces/call-service.interface";
import { ISipService } from "../interfaces/sip.interface";
import { Container } from "inversify";
import { SipService } from "../services/sip.service";
import { CallService } from "../services/call.service";

const container = new Container();

container.bind<ISipService>(SipService).to(SipService).inSingletonScope();
container.bind<ICallService>(CallService).to(CallService).inSingletonScope();

export { container };