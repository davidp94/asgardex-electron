import React, { useCallback } from 'react'

import { PlusCircleFilled, StopOutlined } from '@ant-design/icons'
import { Address } from '@thorchain/asgardex-binance'
import { Row, Col, Button, List } from 'antd'
import * as O from 'fp-ts/lib/Option'
import { useIntl } from 'react-intl'

import { ReactComponent as UnlockOutlined } from '../../assets/svg/icon-unlock-warning.svg'
import { Network } from '../../services/app/types'
import { UserAccountType } from '../../types/wallet'
import {
  StyledTitleWrapper,
  StyledRow,
  StyledWalletCol,
  StyledTitle,
  StyledDivider,
  StyledSubtitle,
  StyledCard,
  StyledOptionCard,
  StyledOptionLabel,
  StyledButton,
  StyledPlaceholder,
  StyledClientLabel,
  StyledClientButton,
  StyledAccountCard,
  StyledListItem,
  StyledChainName,
  StyledChainContent,
  StyledAccountPlaceholder,
  StyledDeviceText,
  StyledAccountContent,
  StyledAccountAddress
} from './Settings.style'

// Dummy Data
const UserAccounts: UserAccountType[] = [
  {
    chainName: 'Binancechain',
    accounts: [
      {
        name: 'Main',
        address: 'tbnb1vxutrxadm0utajduxfr6wd9kqfalv0dg2wnx5y',
        type: 'internal'
      },
      {
        name: 'Ledger',
        address: 'tbnb1vxutrxadm0utajduxfr6wd9kqfalv0dg2wnx5y',
        type: 'external'
      }
    ]
  },
  {
    chainName: 'Ethereum',
    accounts: [
      {
        name: 'Main',
        address: '0x910286F93b230E221384844C4ae18a14c474E74E',
        type: 'internal'
      }
    ]
  },
  {
    chainName: 'Bitcoin',
    accounts: [
      {
        name: 'Main',
        address: '0x910286F93b230E221384844C4ae18a14c474E74E',
        type: 'internal'
      },
      {
        name: 'Ledger',
        address: '0x910286F93b230E221384844C4ae18a14c474E74E',
        type: 'external'
      }
    ]
  }
]
// Dummy data... types not confirmed

type Props = {
  network: Network
  toggleNetwork?: () => void
  address: O.Option<Address>
  lockWallet?: () => void
  removeKeystore?: () => void
}

const Settings: React.FC<Props> = (props: Props): JSX.Element => {
  const intl = useIntl()
  const { network, toggleNetwork = () => {}, lockWallet = () => {}, removeKeystore = () => {} } = props

  const removeWallet = useCallback(() => {
    removeKeystore()
  }, [removeKeystore])

  return (
    <>
      <Row>
        <Col span={24}>
          <StyledTitleWrapper>
            <StyledTitle>{intl.formatMessage({ id: 'setting.title' })}</StyledTitle>
          </StyledTitleWrapper>
          <StyledDivider />
        </Col>
      </Row>
      <StyledRow gutter={[16, 16]}>
        <Col sm={{ span: 24 }} md={{ span: 12 }}>
          <StyledSubtitle>{intl.formatMessage({ id: 'setting.wallet.management' })}</StyledSubtitle>
          <StyledCard>
            <Row>
              <StyledWalletCol sm={{ span: 24 }} md={{ span: 12 }}>
                <StyledOptionCard bordered={false}>
                  <StyledOptionLabel color="primary" size="big">
                    {intl.formatMessage({ id: 'setting.export' })}
                  </StyledOptionLabel>
                </StyledOptionCard>
              </StyledWalletCol>
              <StyledWalletCol sm={{ span: 24 }} md={{ span: 12 }}>
                <StyledOptionCard bordered={false}>
                  <StyledOptionLabel color="warning" size="big" onClick={lockWallet}>
                    {intl.formatMessage({ id: 'setting.lock' })} <UnlockOutlined />
                  </StyledOptionLabel>
                </StyledOptionCard>
              </StyledWalletCol>
              <StyledWalletCol sm={{ span: 24 }} md={{ span: 12 }}>
                <StyledOptionCard bordered={false}>
                  <StyledButton sizevalue="xnormal" color="primary" typevalue="outline" round="true" disabled>
                    {intl.formatMessage({ id: 'setting.view.phrase' })}
                  </StyledButton>
                </StyledOptionCard>
              </StyledWalletCol>
              <StyledWalletCol sm={{ span: 24 }} md={{ span: 12 }}>
                <StyledOptionCard bordered={false}>
                  <StyledButton
                    sizevalue="xnormal"
                    color="error"
                    typevalue="outline"
                    round="true"
                    onClick={removeWallet}>
                    {intl.formatMessage({ id: 'wallet.action.remove' })}
                  </StyledButton>
                </StyledOptionCard>
              </StyledWalletCol>
            </Row>
          </StyledCard>
          <StyledSubtitle>{intl.formatMessage({ id: 'setting.client' })}</StyledSubtitle>
          <StyledCard>
            <Row>
              <Col span={24}>
                <StyledPlaceholder>{intl.formatMessage({ id: 'setting.midgard' })}</StyledPlaceholder>
                <StyledClientLabel>128.128.128.128:8080</StyledClientLabel>
                <StyledPlaceholder>{intl.formatMessage({ id: 'setting.version' })}</StyledPlaceholder>
                <StyledClientLabel>v1.2.3</StyledClientLabel>
                <StyledClientButton color="warning" size="big" onClick={toggleNetwork}>
                  Change to {network === Network.MAIN ? 'testnet' : 'mainnet'}
                </StyledClientButton>
              </Col>
            </Row>
          </StyledCard>
        </Col>

        <Col sm={{ span: 24 }} md={{ span: 12 }}>
          <StyledSubtitle>{intl.formatMessage({ id: 'setting.account.management' })}</StyledSubtitle>
          <StyledAccountCard>
            <List
              dataSource={UserAccounts}
              renderItem={(item, i: number) => (
                <StyledListItem key={i}>
                  <StyledChainName>{item.chainName}</StyledChainName>
                  {item.accounts.map((acc, j) => (
                    <StyledChainContent key={j}>
                      <StyledAccountPlaceholder>{acc.name}</StyledAccountPlaceholder>
                      <StyledAccountContent>
                        <StyledAccountAddress>{acc.address}</StyledAccountAddress>
                        {acc.type === 'external' && (
                          <Button type="link" danger>
                            <StopOutlined />
                          </Button>
                        )}
                      </StyledAccountContent>
                    </StyledChainContent>
                  ))}
                  <StyledChainContent>
                    <StyledDeviceText color="primary">
                      <PlusCircleFilled />
                      Add Device
                    </StyledDeviceText>
                  </StyledChainContent>
                </StyledListItem>
              )}
            />
          </StyledAccountCard>
        </Col>
      </StyledRow>
    </>
  )
}

export default Settings
