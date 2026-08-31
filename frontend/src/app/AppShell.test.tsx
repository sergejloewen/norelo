import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, expect, it } from 'vitest'

import { AppShell } from './AppShell'

describe('AppShell', () => {
  it('renders the Norelo application shell', () => {
    render(
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>,
    )

    expect(screen.getByText('Norelo')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Tasks')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })
})