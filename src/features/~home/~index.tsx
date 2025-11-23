import { createFileRoute } from '@tanstack/react-router'

import LoggedInLayout from '@/components/logged-in-layout'

export const Route = createFileRoute('/home/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <LoggedInLayout>
      <div>Home</div>
    </LoggedInLayout>
  )
}
