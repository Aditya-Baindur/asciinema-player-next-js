declare module "asciinema-player" {
  export interface AsciinemaPlayerOptions {
    autoplay?: boolean;
    loop?: boolean;
    preload?: boolean;
    fit?: "width" | "height" | "both" | "none";
    theme?: "asciinema" | "tango" | "solarized-dark" | "solarized-light";
    poster?: string;
    speed?: number;
    startAt?: number;
    idleTimeLimit?: number;
    loopLimit?: number;
    fontSize?: string;
    rows?: number;
    cols?: number;
  }

  export function create(
    castPath: string,
    container: HTMLElement,
    options?: AsciinemaPlayerOptions
  ): void;
}
