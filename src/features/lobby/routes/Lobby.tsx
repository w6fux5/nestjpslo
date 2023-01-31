import daitoMachine from '@/assets/daito/machine.webp';
import sammyMachine from '@/assets/sammy/machine.webp';
import signboard from '@/assets/signboard.webp';
import { ContentLayout } from '@/components';

import { LobbyHeader } from '../components';
import { useSeatPosition } from '../hooks/useSeatPosition';

import styles from './Lobby.module.scss';

const DUMMY_DATA = [
  {
    id: 1,
    brand: 'daito',
    seatList: [
      { id: 1, player: true, setup: 1 },
      { id: 2, player: true, setup: 2 },
      { id: 3, player: true, setup: 2 },
      { id: 3, player: true, setup: 2 },
      { id: 3, player: true, setup: 2 },
      { id: 3, player: true, setup: 2 },
    ],
  },
  {
    id: 1,
    brand: 'sammy',
    seatList: [
      { id: 1, player: true, setup: 1 },
      { id: 2, player: true, setup: 2 },
      { id: 3, player: true, setup: 2 },
      { id: 3, player: true, setup: 2 },
      { id: 3, player: true, setup: 2 },
      { id: 3, player: true, setup: 2 },
    ],
  },
];

export const Lobby = () => {
  const { seatPosition, offset } = useSeatPosition();

  return (
    <ContentLayout header={LobbyHeader}>
      <div className={styles['lobby-container']}>
        <div className={styles.inner}>
          <img className={styles['sing-board']} src={signboard} alt="sign" />

          <div className={styles['platform-list']}>
            {DUMMY_DATA.map((platform) => (
              <div className={styles.platform}>
                {platform.seatList.map((seat, index) => {
                  if (index >= 6) return null;
                  const { brand } = platform;
                  const machineImg = brand === 'sammy' ? sammyMachine : daitoMachine;
                  return (
                    <div
                      style={{
                        bottom: `calc(${seatPosition.bottom} + ${index} * ${offset.bottom})`,
                        left: `calc(${seatPosition.left} + ${index} * ${offset.left})`,
                        zIndex: 5 - index,
                        backgroundImage: `url(${machineImg})`,
                      }}
                      className={styles.seat}
                    >
                      <div className={styles.setup} />
                      <div
                        style={{
                          zIndex: 5 - index,
                        }}
                        className={styles['user-box']}
                      >
                        {seat.player && <div className={styles.user} />}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};
