import { useMediaQuery } from '@/hooks/useMediaQuery';

export const useSeatPosition = () => {
  const {
    bigDesktop,
    tabLand,
    tabPort,
    sTiny,
    mobile,
    iphone11,
    tiny,
    iphoneMini,
    iphone12,
    xs,
    sm,
  } = useMediaQuery();

  let seatPosition = {
    bottom: '4%',
    left: '15%',
  };

  let offset = {
    bottom: '2.5em',
    left: '5em',
  };

  // width > 1800?
  if (bigDesktop) {
    seatPosition = {
      bottom: '4%',
      left: '7.5%',
    };
  }
  // width < 1200?
  if (tabLand) {
    seatPosition = {
      bottom: '4%',
      left: '19%',
    };
  }
  // width < 900?
  if (tabPort) {
    seatPosition = {
      bottom: '4%',
      left: '22%',
    };
  }

  // width < 540?
  if (sm) {
    seatPosition = {
      bottom: '4%',
      left: '20%',
    };
  }

  // width < 480?
  if (xs) {
    seatPosition = {
      bottom: '4%',
      left: '16%',
    };
  }

  // width < 440?
  if (mobile) {
    seatPosition = {
      bottom: '4%',
      left: '14%',
    };
  }

  // width < 414?
  if (iphone11) {
    seatPosition = {
      bottom: '4%',
      left: '12%',
    };
  }
  // width < 390?
  if (iphone12) {
    seatPosition = {
      bottom: '4%',
      left: '9%',
    };
  }

  // width < 360?
  if (iphoneMini) {
    seatPosition = {
      bottom: '6%',
      left: '8%',
    };
    offset = {
      bottom: '2em',
      left: '4.5em',
    };
  }

  // width < 340?
  if (tiny) {
    seatPosition = {
      bottom: '8%',
      left: '6%',
    };
  }

  // width < 320?
  if (sTiny) {
    seatPosition = {
      bottom: '10%',
      left: '5.5%',
    };

    offset = {
      bottom: '2em',
      left: '4em',
    };
  }

  return { seatPosition, offset };
};
