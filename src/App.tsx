import { Button } from '@/components/ui'

export function App() {
  return (
    <div>
      <Button
        onClick={() => {
          window.location.href = 'https://google.com'
        }}
        variant={'primary'}
      >
        кнопка обычная
      </Button>

      <Button as={'a'} href={'https://google.com'} variant={'primary'}>
        кнопка ссылка
      </Button>
    </div>
  )
}
