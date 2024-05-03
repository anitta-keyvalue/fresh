/* eslint-disable @typescript-eslint/no-empty-interface */
import {RootStackParamList} from './root';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
