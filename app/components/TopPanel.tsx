/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback, useContext } from 'react';
import { Button, Icon, Position, Tooltip } from '@blueprintjs/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Col, Row } from 'react-flexbox-grid';
import { useTranslation } from 'react-i18next';
import ConnectedDevicesListDrawer from './ConnectedDevicesListDrawer';
import { SettingsContext } from '../containers/SettingsProvider';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment

const useStylesWithTheme = (isDarkTheme: boolean) =>
  makeStyles(() =>
    createStyles({
      topPanelRoot: {
        display: 'flex',
        paddingTop: '15px',
        marginBottom: '20px',
      },
      logoWithAppName: { margin: '0 auto' },
      appNameHeader: {
        margin: '0 auto',
        paddingTop: '5px',
        fontFamily: 'Lexend Peta',
        fontSize: '20px',
        color: isDarkTheme ? '#48AFF0' : '#1F4B99',
        cursor: 'default !important',
      },
      topPanelControlButtonsRoot: {
        position: 'absolute',
        right: '15px',
        display: 'flex',
      },
      topPanelControlButton: {
        width: '40px',
        height: '40px',
        borderRadius: '50px',
        cursor: 'default !important',
      },
      topPanelControlButtonMargin: {
        marginRight: '20px',
        cursor: 'default !important',
      },
      topPanelIconOfControlButton: {
        cursor: 'default !important',
      },
    })
  );

export default function TopPanel(props: any) {
  const { t } = useTranslation();
  const { isDarkTheme } = useContext(SettingsContext);

  const getClassesCallback = useCallback(() => {
    return useStylesWithTheme(isDarkTheme)();
  }, [isDarkTheme]);

  const [isDrawersOpen, setIsDrawerOpen] = React.useState(false);

  const handleToggleConnectedDevicesListDrawer = useCallback(() => {
    setIsDrawerOpen(!isDrawersOpen);
  }, [isDrawersOpen]);

  const renderConnectedDevicesListButton = useCallback(() => {
    return (
      <div className={getClassesCallback().topPanelControlButtonMargin}>
        <Tooltip content={t('Connected Devices')} position={Position.BOTTOM}>
          <Button
            id="top-panel-connected-devices-list-button"
            intent="primary"
            className={getClassesCallback().topPanelControlButton}
            onClick={handleToggleConnectedDevicesListDrawer}
          >
            <Icon
              className={getClassesCallback().topPanelIconOfControlButton}
              icon="th-list"
              iconSize={20}
            />
          </Button>
        </Tooltip>
      </div>
    );
  }, [getClassesCallback, handleToggleConnectedDevicesListDrawer, t]);

  const renderLogoWithAppName = useCallback(() => {
    return (
      <div
        id="logo-with-popover-visit-website"
        className={getClassesCallback().logoWithAppName}
      >
        <h4
          id="alien-top-app-name-header"
          className={getClassesCallback().appNameHeader}
          style={{
            fontFamily: 'Fira Code',
            transform: 'translateY(-3px)',
          }}
        >
          👽 ALIEN
        </h4>
      </div>
    );
  }, [getClassesCallback]);

  return (
    <>
      <div className={getClassesCallback().topPanelRoot}>
        <Row
          middle="xs"
          center="xs"
          style={{ width: '100%', transform: 'translateX(-50px)' }}
        >
          <Col>{renderLogoWithAppName()}</Col>
        </Row>
        <div className={getClassesCallback().topPanelControlButtonsRoot}>
          {renderConnectedDevicesListButton()}
        </div>
      </div>
      <ConnectedDevicesListDrawer
        isOpen={isDrawersOpen}
        handleToggle={handleToggleConnectedDevicesListDrawer}
        stepperRef={props.stepperRef}
      />
    </>
  );
}
