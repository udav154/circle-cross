import React from 'react'

interface State {
  hasError: boolean
}

interface TProps {
  children: React.ReactNode
}

class ErrorBoundary extends React.Component<TProps, State> {
  constructor (props: TProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: any): { hasError: true } {
    console.log(error)
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: any, errorInfo: any): void {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
    this.setState({ hasError: true })
  }

  render (): React.ReactNode {
    if (this.state.hasError) {
      return <div>Упс... Что-то пошло не так</div>
    }
    return this.props.children
  }
}

export default ErrorBoundary
