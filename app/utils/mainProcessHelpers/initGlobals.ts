import ConnectedDevicesService from '../../features/ConnectedDevicesService';
import SharingSessionService from '../../features/SharingSessionService';
import RendererWebrtcHelpersService from '../../features/PeerConnectionHelperRendererService';
import RoomIDService from '../../server/RoomIDService';
import DesktopCapturerSources from '../../features/DesktopCapturerSourcesService';
import { AlienGlobal } from './AlienGlobal';

export default (appPath: string) => {
  const alienGlobal: AlienGlobal = (global as unknown) as AlienGlobal;

  alienGlobal.appPath = appPath;

  alienGlobal.rendererWebrtcHelpersService = new RendererWebrtcHelpersService(
    appPath
  );
  alienGlobal.roomIDService = new RoomIDService();
  alienGlobal.connectedDevicesService = new ConnectedDevicesService();
  alienGlobal.sharingSessionService = new SharingSessionService(
    alienGlobal.roomIDService,
    alienGlobal.connectedDevicesService,
    alienGlobal.rendererWebrtcHelpersService
  );
  alienGlobal.desktopCapturerSourcesService = new DesktopCapturerSources();
};
