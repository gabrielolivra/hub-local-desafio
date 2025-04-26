import cronstrue from 'cronstrue';
import 'cronstrue/locales/pt_BR'


export const cronToHumans = (cron: string) => {
  if (!cron) return
  return cronstrue.toString(cron, { locale: 'pt_BR' })
}