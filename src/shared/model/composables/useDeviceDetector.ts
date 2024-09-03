export function useDeviceDetector() {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return {
    isDesktop,
  };
}
