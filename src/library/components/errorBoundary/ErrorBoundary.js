import React, { Component } from 'react'

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error) {
    console.log(error)
    return {
      hasError: true,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.groupCollapsed('Error:')
    console.log({ error })
    console.groupEnd()
  }

  render() {
    console.log(this.state)
    if (this.state.hasError) {
      return <span>Error</span>
    }

    return this.props.children
  }
}

export default ErrorBoundary
