import { Rive } from "@rive-app/react-webgl2";

declare module "@rive-app/react-webgl2" {
  interface Rive {
    setRendererType?(type: string): void;
    setQualityScale?(scale: number): void;
  }

  interface RuntimeLoader {
    load(options: { locateFile: (file: string) => string }): Promise<void>;
  }
}

declare global {
  interface Navigator {
    deviceMemory?: number;
    getBattery?(): Promise<{
      charging: boolean;
      level: number;
    }>;
  }
}
