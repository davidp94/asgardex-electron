export type CommonMessages = {
  'common.greeting': string
  'common.copyright': string
  'common.stats': string
  'common.network': string
  'common.faqs': string
  'common.type': string
  'common.address': string
  'common.to': string
  'common.from': string
  'common.amount': string
  'common.coin': string
  'common.password': string
  'common.memo': string
  'common.refresh': string
  'common.date': string
  'common.remove': string
  'common.back': string
  'common.keystore': string
  'common.phrase': string
  'common.submit': string
  'common.confirm': string
}

export type PoolsMessages = {
  'pools.title': string
  'pools.available': string
}

export type WalletMessages = {
  'wallet.title': string
  'wallet.nav.assets': string
  'wallet.nav.stakes': string
  'wallet.nav.bonds': string
  'wallet.column.name': string
  'wallet.column.ticker': string
  'wallet.column.balance': string
  'wallet.column.value': string
  'wallet.action.send': string
  'wallet.action.receive': string
  'wallet.action.remove': string
  'wallet.action.unlock': string
  'wallet.unlock.title': string
  'wallet.unlock.phrase': string
  'wallet.imports.phrase': string
  'wallet.imports.wallet': string
  'wallet.imports.enterphrase': string
  'wallet.txs.last90days': string
  'wallet.empty.action.import': string
  'wallet.empty.action.create': string
  'wallet.empty.phrase.import': string
  'wallet.empty.phrase.create': string
  'wallet.create.title': string
  'wallet.create.creating': string
  'wallet.create.error': string
  'wallet.create.password.repeat': string
  'wallet.create.password.mismatch': string
  'wallet.create.copy.phrase': string
  'wallet.create.words.click': string
  'wallet.create.enter.phrase': string
}

export type SettingMessages = {
  'setting.title': string
  'setting.wallet.management': string
  'setting.client': string
  'setting.account.management': string
  'setting.export': string
  'setting.lock': string
  'setting.view.phrase': string
  'setting.midgard': string
  'setting.version': string
}

export type Messages = CommonMessages & PoolsMessages & WalletMessages & SettingMessages

export enum Locale {
  EN = 'en',
  FR = 'fr',
  DE = 'de'
}

export type Translation = {
  locale: Locale
  messages: Messages
}