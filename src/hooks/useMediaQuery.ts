import { useMedia } from 'react-use';

export const useMediaQuery = () => {
  const bigDesktop = useMedia('(min-width: 1800px)');
  const tabLand = useMedia('(max-width: 1200px)');
  const tabPort = useMedia('(max-width: 900px)');
  const phone = useMedia('(max-width: 600px)');
  const mobile = useMedia('(max-width: 440px)');
  const tiny = useMedia('(max-width: 340px)');
  const sTiny = useMedia('(max-width: 320px)');

  const iphone11 = useMedia('(max-width: 414px)');
  const iphone12 = useMedia('(max-width: 391px)');
  const iphoneMini = useMedia('(max-width: 360px)');

  const sm = useMedia('(max-width: 540px)');
  const xs = useMedia('(max-width: 480px)');

  return {
    bigDesktop,
    tabLand,
    tabPort,
    phone,
    mobile,
    tiny,
    sTiny,
    iphoneMini,
    iphone11,
    iphone12,
    sm,
    xs,
  };
};
